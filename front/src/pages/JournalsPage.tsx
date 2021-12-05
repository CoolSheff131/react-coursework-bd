import { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { createJournal, deleteJournal, getDocuments, getJournals, getWorkers } from '../api'
import CardJournal from '../components/CardJournal'
import DialogJournal from '../components/DialogJournal'
import Document from "../Entities/Document";
import Journal from "../Entities/Journal";
import Worker from "../Entities/Worker";

function JournalsPage() {
    const [journals, setJournals] = useState<Journal[]>([])
    const [showCreateDialog, setShowCreateDialog] = useState<boolean>(false);
    const [workers, setWorkers] = useState<Worker[]>([])
    const [documents, setDocuments] = useState<Document[]>([])
    useEffect(() => {
        getJournals().then(data => {
            setJournals(data);
        }).catch(err => console.log(err)
        )
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


    const handleClose = () => {
        setShowCreateDialog(false);
    }

    const handleConfirm = (journal: Journal) => {
        console.log(journal);

        createJournal(journal).then(result => { console.log(result) }).then(() => {
            setJournals([...journals, journal])
            setShowCreateDialog(false);
        });
    }

    const handleOpen = () => {
        setShowCreateDialog(true);
    }
    const handleDelete = (journal: Journal) => {
        deleteJournal(journal.id).then(result => { console.log(result) }).then(() => {
            setJournals(journals?.filter(jour => jour !== journal))
        })
    }

    return (
        <div>
            <Container>
                <Button variant="primary" size="lg" onClick={() => { handleOpen() }}>
                    CreateJournal
                </Button>
                <DialogJournal title={'Добавление записи журнала'} show={showCreateDialog} handleClose={handleClose} handleConfirm={handleConfirm} workers={workers} documents={documents} />
                <h1>Journals</h1>
                <Row>
                    {journals?.map(journal => <Col xs={6}><CardJournal journal={journal} handleDelete={handleDelete} /></Col>)}
                </Row>
            </Container>
        </div>
    )
}

export default JournalsPage