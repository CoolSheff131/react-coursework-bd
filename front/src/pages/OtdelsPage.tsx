import { useEffect, useState } from "react";
import { getOtdels } from "../api";
import Otdel from "../Entities/Otdel";
import { Col, Container, Row } from "react-bootstrap";
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
    return (
        <div>
            <Container>
                <h1>Otdels</h1>
                <Row>
                    {otdels?.map(otdel => <Col xs={6}><CardOtdel otdel={otdel} /></Col>)}
                </Row>
            </Container>
        </div>
    )
}

export default OtdelsPage