import { Button, ButtonGroup, Card } from "react-bootstrap";
import { deleteWorker } from "../api";
import Worker from "../Entities/Worker";

interface DocumentProp {
    worker: Worker
}
function CardWorker(prop: DocumentProp) {
    const { worker } = prop;
    const deleteHandle = () => {
        deleteWorker(worker.id).then(result => { console.log(result) })
    }
    return (
        <Card border="dark">
            <Card.Header as="h5">{worker.firstName + worker.secondName}</Card.Header>
            <Card.Body>
                <h6>Отдел</h6>
                <Card.Title>{worker.otdelName}</Card.Title>
                <ButtonGroup size="sm" >
                    <Button variant="dark" onClick={() => deleteHandle()}>Delete</Button>
                    <Button variant="dark">Change</Button>
                    <Button variant="dark">Show</Button>
                </ButtonGroup>
            </Card.Body>
        </Card>
    )
}

export default CardWorker;