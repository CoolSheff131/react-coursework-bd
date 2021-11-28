import { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { createDocument, getDocuments } from '../api'
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
    const crtDocument = () => {
        const doc: Document = {
            id: 0,
            number: 3,
            firstNameAuthor: '3',
            name: '3',
            organizationName: '3',
            pageCount: 3,
            secondNameAuthor: '3',
            type: '3',
            year: 3
        }
        createDocument(doc).then(result => { console.log(result) });
    }

    return (
        <div>
            <Container>
                <Button variant="primary" size="lg" onClick={() => { crtDocument() }}>
                    CreateDocument
                </Button>
                <h1>Documents</h1>
                <Row>
                    {Documents?.map(document => <Col xs={6}><CardDocument document={document} /></Col>)}
                </Row>
            </Container>

        </div>
    )
}

export default DocumentsPage