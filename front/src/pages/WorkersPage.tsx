import { useEffect, useState } from "react";
import { createtWorker, getWorkers } from "../api";
import { Button, Col, Container, Row } from "react-bootstrap";
import CardWorker from "../components/CardWorker";
import Worker from "../Entities/Worker"

function WorkersPage() {
    const [workers, setWorkers] = useState<Worker[]>()
    useEffect(() => {
        getWorkers().then(data => {
            setWorkers(data);
        }).catch(err => console.log(err)
        )
        return () => {

        }
    }, [])
    const crtWorker = () => {
        const worker: Worker = {
            firstName: "3",
            id: 0,
            otdelId: 1,
            otdelName: "3",
            secondName: "3"
        }
        createtWorker(worker).then(result => { console.log(result) });
    }
    return (
        <div>
            <Container>
                <h1>Workers</h1>
                <Button variant="primary" size="lg" onClick={() => { crtWorker() }}>
                    CreateWorker
                </Button>
                <Row>
                    {workers?.map(worker => <Col xs={6}><CardWorker worker={worker} /></Col>)}
                </Row>
            </Container>
        </div>
    )
}

export default WorkersPage