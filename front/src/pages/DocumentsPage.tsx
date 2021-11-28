import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { getDocuments } from '../api'
import CardDocument from '../components/CardDocument'
import Document from '../Entities/Document'
function DocumentsPage() {
    const [Documents, setDocuments] = useState<Document[]>()
    useEffect(() => {
        getDocuments().then(data => {
            setDocuments(data);
        }).catch(err => console.log(err)
        )
        return () => {

        }
    }, [])
    return (
        <div>
            <Container>
                <h1>Documents</h1>
                <Row>
                    {Documents?.map(document => <Col xs={6}><CardDocument document={document} /></Col>)}
                </Row>
            </Container>

        </div>
    )
}

export default DocumentsPage