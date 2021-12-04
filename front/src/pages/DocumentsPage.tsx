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


    const handleClose = () => {
        setShowCreateDialog(false);
    }

    const handleConfirm = (document: Document) => {
        createDocument(document).then(result => { console.log(result) });
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
                <DialogDocument title="Добавление документа" show={showCreateDialog} handleClose={handleClose} handleConfirm={handleConfirm} />
                <h1>Documents</h1>
                <Row>
                    {Documents?.map(document => <Col xs={6}><CardDocument document={document} /></Col>)}
                </Row>
            </Container>

        </div>
    )
}

export default DocumentsPage