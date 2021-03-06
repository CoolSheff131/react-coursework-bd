import { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { createDocument, deleteDocument, getDocuments } from '../api'
import CardDocument from '../components/CardDocument'
import DialogDocument from '../components/DialogDocument'
import Document from '../Entities/Document'
import { useTypedSelector } from '../hooks/useTypedSelector'
function DocumentsPage() {
    const [showCreateDialog, setShowCreateDialog] = useState<boolean>(false);
    const [documents, setDocuments] = useState<Document[]>([])
    const { role } = useTypedSelector(state => state.user)
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
        createDocument(document).then(result => { console.log(result) }).then(() => {
            setDocuments([...documents, document])
            setShowCreateDialog(false);
        });
    }

    const handleOpen = () => {
        setShowCreateDialog(true);
    }
    const handleDelete = (document: Document) => {
        deleteDocument(document.id).then(() => {
            setDocuments(documents?.filter(doc => doc !== document))
        })
    }

    return (
        <div>
            <Container>
                {(role === "ARCHIVE" || role === "ADMIN") && <Button variant="primary" size="lg" onClick={() => { handleOpen() }}>
                    CreateDocument
                </Button>}

                <DialogDocument title="Добавление документа" show={showCreateDialog} handleClose={handleClose} handleConfirm={handleConfirm} />
                <h1>Documents</h1>
                <Row>
                    {documents?.map(document => <Col xs={6}><CardDocument document={document} handleDelete={handleDelete} /></Col>)}
                </Row>
            </Container>

        </div>
    )
}

export default DocumentsPage