import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { updateOrganization } from "../api";
import Organization from "../Entities/Organization";
import DialogOrganization from "./DialogOrganization";

interface DocumentProp {
    organization: Organization
    handleDelete(organization: Organization): void
}
function CardOrganization(prop: DocumentProp) {
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const { organization, handleDelete } = prop;

    const deleteHandle = () => {
        handleDelete(organization)
    }

    const handleClose = () => {
        setShowDialog(false);
    }

    const handleConfirm = (changedOrg: Organization) => {
        const c: Organization = {
            ...changedOrg,

            id: organization.id,
        }
        updateOrganization(c).then(result => { console.log(result) });
        setShowDialog(false);
    }

    const handleOpen = () => {
        setShowDialog(true);
    }

    return (
        <Card border="dark">
            <Card.Header as="h5">{organization.name}</Card.Header>
            <Card.Body>
                <Card.Text>
                    <h6>Индекс</h6>
                    {organization.addressIndex}
                    <h6>Город</h6>
                    {organization.city}
                    <h6>Почта</h6>
                    {organization.email}
                    <h6>Факс</h6>
                    {organization.faks}
                    <h6>Телефок</h6>
                    {organization.phone}
                </Card.Text>

                <Button variant="dark" onClick={() => deleteHandle()}>Delete</Button>
                <Button variant="dark" onClick={() => handleOpen()}>Change</Button>

                <DialogOrganization title="Изменение документа" show={showDialog} handleClose={handleClose} handleConfirm={handleConfirm} organization={organization} />
            </Card.Body>
        </Card>
    )
}

export default CardOrganization;