import { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { createDocument, getDocuments } from '../api'
import CardDocument from '../components/CardDocument'
import DialogDocument from '../components/DialogDocument'
import Document from '../Entities/Document'
function DocumentsPage() {
    const [showCreateDialog, setShowCreateDialog] = useState<boolean>(false);
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

    const handleClose = () => {
        setShowCreateDialog(false);
    }

    const handleConfirm = (event: any) => {
        event.preventDefault();
        setShowCreateDialog(false);
    }

    const handleOpen = () => {
        setShowCreateDialog(true);
    }

    return (
        <div>
            <Container>
                <Button variant="primary" size="lg" onClick={() => { handleOpen() }}>
                    CreateDocument
                </Button>
                <DialogDocument show={showCreateDialog} handleClose={handleClose} handleConfirm={handleConfirm} />
                <h1>Documents</h1>
                <Row>
                    {Documents?.map(document => <Col xs={6}><CardDocument document={document} /></Col>)}
                </Row>
            </Container>

        </div>
    )
}

export default DocumentsPage