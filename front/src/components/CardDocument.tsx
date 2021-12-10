import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { findWorkerWithDocument, patchDocument, updateDocument } from "../api";
import Document from "../Entities/Document";
import { useTypedSelector } from "../hooks/useTypedSelector";
import DialogDocument from "./DialogDocument";

interface DocumentProp {
    document: Document
    handleDelete(document: Document): void
}
function CardDocument(prop: DocumentProp) {
    const { handleDelete } = prop;
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const [document, setDocument] = useState<Document>(prop.document)
    const { role, workerId } = useTypedSelector(state => state.user)
    const [canReturn, setCanReturn] = useState<boolean>(false)

    useEffect(() => {
        if (!document.inArchive) {
            findWorkerWithDocument(document.id).then((workerHandling) => {
                console.log(workerHandling.workerHandlingId);
                console.log(workerId);
                if (workerHandling.workerHandlingId === workerId) {
                    setCanReturn(true)
                    console.log(true);
                }
            }).catch(err => { console.log(err) })
        }
        return () => { }
    }, [document.id, document.inArchive, canReturn, workerId])

    const deleteHandle = () => {
        handleDelete(document)
    }
    const handleClose = () => {
        setShowDialog(false);
    }

    const handleConfirm = (changeDoc: Document) => {
        const c: Document = {
            ...changeDoc,

            id: document.id,
        }
        updateDocument(c).then(result => { console.log(result) });
        setShowDialog(false);
    }

    const handleOpen = () => {
        setShowDialog(true);
    }
    const handlePatch = () => {
        if (workerId !== undefined) {
            patchDocument(document.id, !document.inArchive, workerId).then(() => {
                setDocument({ ...document, inArchive: !document.inArchive })
            });
        }
    }

    return (
        <Card border="dark">
            <Card.Header as="h5">{document.name}</Card.Header>
            <Card.Body>
                <h6>Название организации</h6>
                <Card.Title>{document.organizationName}</Card.Title>
                <Card.Text>
                    <h6>ФИО автора</h6>
                    {document.firstNameAuthor} {document.secondNameAuthor}
                    <h6>Номер</h6>
                    {document.number}
                    <h6>Количество страниц</h6>
                    {document.pageCount}
                    <h6>Тип документа</h6>
                    {document.type}
                    <h6>Год</h6>
                    {document.year}
                </Card.Text>

                <Button variant="dark" onClick={() => deleteHandle()}>Delete</Button>
                <Button variant="dark" onClick={() => handleOpen()}>Change</Button>

                {(role === "WORKER") && <Button disabled={!document.inArchive && !canReturn} variant="dark" onClick={() => handlePatch()}>{document.inArchive ? 'Забрать' : 'Положить'}</Button>}

                <DialogDocument title="Изменение документа" show={showDialog} handleClose={handleClose} handleConfirm={handleConfirm} document={document} />
            </Card.Body>
        </Card>
    )
}

export default CardDocument;