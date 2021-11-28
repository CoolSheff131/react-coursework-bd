import { useEffect, useState } from "react";
import { getWorkers } from "../api";
import { Col, Container, Row } from "react-bootstrap";
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
    return (
        <div>
            <Container>
                <h1>Workers</h1>
                <Row>
                    {workers?.map(worker => <Col xs={6}><CardWorker worker={worker} /></Col>)}
                </Row>
            </Container>
        </div>
    )
}

export default WorkersPage