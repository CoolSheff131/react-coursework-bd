import { useEffect, useState } from "react";
import { createtOtdel, getOrganizations, getOtdels } from "../api";
import Otdel from "../Entities/Otdel";
import { Button, Col, Container, Row } from "react-bootstrap";
import CardOtdel from "../components/CardOtdel";
import DialogOtdel from "../components/DialogOtdel";
import Organization from "../Entities/Organization";

function OtdelsPage() {
    const [otdels, setOtdels] = useState<Otdel[]>()
    const [organizations, setOrganization] = useState<Organization[]>([])
    const [showCreateDialog, setShowCreateDialog] = useState<boolean>(false);

    useEffect(() => {
        getOtdels().then(data => {
            setOtdels(data);

        }).catch(err => console.log(err))

        getOrganizations().then(data => {
            setOrganization(data);
        }).catch(err => console.log(err))

        return () => {

        }
    }, [])


    const handleClose = () => {
        setShowCreateDialog(false);
    }

    const handleConfirm = (otdel: Otdel) => {
        createtOtdel(otdel).then(result => { console.log(result) });
        setShowCreateDialog(false);
    }

    const handleOpen = () => {
        setShowCreateDialog(true);
    }

    return (
        <div>
            <Container>
                <h1>Otdels</h1>
                <Button variant="primary" size="lg" onClick={() => { handleOpen() }}>
                    CreateOtdel
                </Button>
                <DialogOtdel title={"Добавление организации"} show={showCreateDialog} handleClose={handleClose} handleConfirm={handleConfirm} organizations={organizations} />
                <Row>
                    {otdels?.map(otdel => <Col xs={6}><CardOtdel otdel={otdel} /></Col>)}
                </Row>
            </Container>
        </div>
    )
}

export default OtdelsPage