import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { getJournals } from '../api'
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
    return (
        <div>
            <Container>
                <h1>Journals</h1>
                <Row>
                    {journals?.map(journal => <Col xs={6}><CardJournal journal={journal} /></Col>)}
                </Row>
            </Container>
        </div>
    )
}

export default JournalsPage