import { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { createJournal, getJournals } from '../api'
import CardJournal from '../components/CardJournal'
import Journal from '../Entities/Journal'
function JournalsPage() {
    const [journals, setJournals] = useState<Journal[]>()
    useEffect(() => {
        getJournals().then(data => {
            setJournals(data);
        }).catch(err => console.log(err)
        )
        return () => {

        }
    }, [])

    const crtJournal = () => {
        const jrn: Journal = {
            actionType: '3',
            documentNumber: 3,
            documentId: 1,
            workerId: 1,
            id: 0
        }
        createJournal(jrn).then(result => { console.log(result) });
    }

    return (
        <div>
            <Container>
                <Button variant="primary" size="lg" onClick={() => { crtJournal() }}>
                    CreateOtdel
                </Button>
                <h1>Journals</h1>
                <Row>
                    {journals?.map(journal => <Col xs={6}><CardJournal journal={journal} /></Col>)}
                </Row>
            </Container>
        </div>
    )
}

export default JournalsPage