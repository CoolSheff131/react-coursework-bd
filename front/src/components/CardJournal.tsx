import { Button, Card } from "react-bootstrap";
import { deleteJournal, updateJournal, getDocuments, getWorkers } from "../api";
import Journal from "../Entities/Journal";
import Document from "../Entities/Document";
import Worker from "../Entities/Worker";
import DialogJournal from '../components/DialogJournal'
import { useState, useEffect } from "react";

interface DocumentProp {
    journal: Journal
}
function CardJournal(prop: DocumentProp) {
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const [workers, setWorkers] = useState<Worker[]>([])
    const [documents, setDocuments] = useState<Document[]>([])
    const { journal } = prop;
    useEffect(() => {
        getDocuments().then(data => {
            setDocuments(data);
        }).catch(err => console.log(err)
        )
        getWorkers().then(data => {
            setWorkers(data);
        }).catch(err => console.log(err)
        )
        return () => {

        }
    }, [])

    const deleteHandle = () => {
        deleteJournal(journal.id).then(result => { console.log(result) })
    }
    const handleClose = () => {
        setShowDialog(false);
    }

    const handleConfirm = (changejour: Journal) => {
        const c: Journal = {
            ...changejour,

            id: journal.id,
        }
        updateJournal(c).then(result => { console.log(result) });
        setShowDialog(false);
    }

    const handleOpen = () => {
        setShowDialog(true);
    }

    return (
        <Card border="dark">
            <Card.Header as="h5">{journal.documentNumber}</Card.Header>
            <Card.Body>
                <h6>Название документа</h6>
                <Card.Title>{journal.documentId}</Card.Title>
                <Card.Text>
                    <h6>ФИО Работника</h6>
                    {journal.workerId}
                    <h6>Тип действия</h6>
                    {journal.actionType}
                </Card.Text>

                <Button variant="dark" onClick={() => deleteHandle()}>Delete</Button>
                <Button variant="dark" onClick={() => handleOpen()}>Change</Button>


                <DialogJournal title={'Изменение записи журнала'} show={showDialog} handleClose={handleClose} handleConfirm={handleConfirm} workers={workers} documents={documents} journal={journal} />
            </Card.Body>
        </Card>
    )
}

export default CardJournal;