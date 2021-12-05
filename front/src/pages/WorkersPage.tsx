import { useEffect, useState } from "react";
import { createtWorker, deleteWorker, getOtdels, getWorkers } from "../api";
import { Button, Col, Container, Row } from "react-bootstrap";
import CardWorker from "../components/CardWorker";
import Worker from "../Entities/Worker"
import DialogWorker from "../components/DialogWorker";
import Otdel from "../Entities/Otdel";

function WorkersPage() {
    const [workers, setWorkers] = useState<Worker[]>()
    const [showCreateDialog, setShowCreateDialog] = useState<boolean>(false);
    const [otdels, setOtdels] = useState<Otdel[]>([]);
    useEffect(() => {
        getWorkers().then(data => {
            setWorkers(data);
        }).catch(err => console.log(err)
        )
        getOtdels().then(data => {
            setOtdels(data);
        }).catch(err => console.log(err))
        return () => {

        }
    }, [])
    const handleClose = () => {
        setShowCreateDialog(false);
    }

    const handleConfirm = (worker: Worker) => {
        createtWorker(worker).then(result => { console.log(result) });
        setShowCreateDialog(false);
    }

    const handleOpen = () => {
        setShowCreateDialog(true);
    }
    const handleDelete = (worker: Worker) => {
        deleteWorker(worker.id).then(result => { console.log(result) }).then(() => {
            setWorkers(workers?.filter(wor => wor !== worker))
        })

    }
    return (
        <div>
            <Container>
                <h1>Workers</h1>
                <Button variant="primary" size="lg" onClick={() => { handleOpen() }}>
                    CreateWorker
                </Button>
                <DialogWorker title={"Добавление работника"} show={showCreateDialog} handleClose={handleClose} handleConfirm={handleConfirm} otdels={otdels} />
                <Row>
                    {workers?.map(worker => <Col xs={6}><CardWorker worker={worker} handleDelete={handleDelete} /></Col>)}
                </Row>
            </Container>
        </div>
    )
}

export default WorkersPage