import { Button, ButtonGroup, Card } from "react-bootstrap";
import { deleteOtdel, getOrganizations, updateOtdel } from "../api";
import Otdel from "../Entities/Otdel";
import Organization from "../Entities/Organization";
import DialogOtdel from "../components/DialogOtdel";
import { useState, useEffect } from "react";

interface DocumentProp {
    otdel: Otdel
}
function CardOtdel(prop: DocumentProp) {
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const [organizations, setOrganization] = useState<Organization[]>([])
    const { otdel } = prop;

    useEffect(() => {

        getOrganizations().then(data => {
            setOrganization(data);
        }).catch(err => console.log(err))

        return () => {

        }
    }, [])

    const deleteHandle = () => {
        deleteOtdel(otdel.id).then(result => { console.log(result) })
    }
    const handleClose = () => {
        setShowDialog(false);
    }

    const handleConfirm = (changeOtdel: Otdel) => {
        const c: Otdel = {
            ...changeOtdel,

            id: otdel.id,
        }
        updateOtdel(c).then(result => { console.log(result) });
        setShowDialog(false);
    }

    const handleOpen = () => {
        setShowDialog(true);
    }
    return (
        <Card border="dark">
            <Card.Header as="h5">{otdel.name}</Card.Header>
            <Card.Body>
                <Card.Text>
                    <h6>ФИО босса</h6>
                    {otdel.firstNameBoss} {otdel.secondNameBoss}
                    <h6>Название организации</h6>
                    {otdel.organizationName}
                    <h6>Телефон</h6>
                    {otdel.phone}
                </Card.Text>
                <ButtonGroup size="sm" >
                    <Button variant="dark" onClick={() => deleteHandle()}>Delete</Button>
                    <Button variant="dark" onClick={() => handleOpen()}>Change</Button>
                    <Button variant="dark">Show</Button>
                </ButtonGroup>
                <DialogOtdel title={"Изменение отдела"} show={showDialog} handleClose={handleClose} handleConfirm={handleConfirm} organizations={organizations} otdel={otdel} />
            </Card.Body>
        </Card>
    )
}

export default CardOtdel;