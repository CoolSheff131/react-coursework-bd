import { useEffect, useState } from "react";
import { createtOtdel, getOtdels } from "../api";
import Otdel from "../Entities/Otdel";
import { Button, Col, Container, Row } from "react-bootstrap";
import CardOtdel from "../components/CardOtdel";

function OtdelsPage() {
    const [otdels, setOtdels] = useState<Otdel[]>()
    useEffect(() => {
        getOtdels().then(data => {
            setOtdels(data);
        }).catch(err => console.log(err)
        )
        return () => {

        }
    }, [])
    const crtOtdel = () => {
        const org: Otdel = {
            firstNameBoss: "3",
            id: 0,
            name: "3",
            organizationId: 1,
            organizationName: "3",
            phone: "3",
            secondNameBoss: "3"
        }
        createtOtdel(org).then(result => { console.log(result) });
    }
    return (
        <div>
            <Container>
                <h1>Otdels</h1>
                <Button variant="primary" size="lg" onClick={() => { crtOtdel() }}>
                    CreateOtdel
                </Button>
                <Row>
                    {otdels?.map(otdel => <Col xs={6}><CardOtdel otdel={otdel} /></Col>)}
                </Row>
            </Container>
        </div>
    )
}

export default OtdelsPage