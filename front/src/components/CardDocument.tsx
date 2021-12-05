import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { patchDocument, updateDocument } from "../api";
import Document from "../Entities/Document";
import DialogDocument from "./DialogDocument";

interface DocumentProp {
    document: Document
    handleDelete(document: Document): void
}
function CardDocument(prop: DocumentProp) {
    const { handleDelete } = prop;
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const [document, setDocument] = useState<Document>(prop.document)
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
        patchDocument(document.id, !document.inArchive, 18);
        setDocument({ ...document, inArchive: !document.inArchive })
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


                <Button variant="dark" onClick={() => handlePatch()}>{document.inArchive ? 'Забрать' : 'Положить'}</Button>
                <DialogDocument title="Изменение документа" show={showDialog} handleClose={handleClose} handleConfirm={handleConfirm} document={document} />
            </Card.Body>
        </Card>
    )
}

export default CardDocument;