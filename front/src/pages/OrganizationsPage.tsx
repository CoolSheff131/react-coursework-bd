import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { createOrganization, getOrganizations } from "../api";
import CardOrganization from "../components/CardOrganization";
import DialogOrganization from "../components/DialogOrganization";
import Organization from "../Entities/Organization"

function OrganizationsPage() {
    const [organizations, setOrganiaions] = useState<Organization[]>()
    const [showCreateDialog, setShowCreateDialog] = useState<boolean>(false);

    useEffect(() => {
        getOrganizations().then(data => {
            setOrganiaions(data);
        }).catch(err => console.log(err)
        )
        return () => {

        }
    }, [])

    const handleClose = () => {
        setShowCreateDialog(false);
    }

    const handleConfirm = (organization: Organization) => {
        createOrganization(organization).then(result => { console.log(result) });
        setShowCreateDialog(false);
    }

    const handleOpen = () => {
        setShowCreateDialog(true);
    }

    return (
        <div>
            <Container>
                <h1>Organizations</h1>
                <Button variant="primary" size="lg" onClick={() => { handleOpen() }}>
                    CreateOrganization
                </Button>
                <DialogOrganization title="Добавление документа" show={showCreateDialog} handleClose={handleClose} handleConfirm={handleConfirm} />
                <Row>
                    {organizations?.map(organization => <Col xs={6}><CardOrganization organization={organization} /></Col>)}
                </Row>
            </Container>
        </div>
    )
}

export default OrganizationsPage