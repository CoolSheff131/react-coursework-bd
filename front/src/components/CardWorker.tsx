import { useState, useEffect } from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { deleteWorker, updateWorker, getOtdels } from "../api";
import Worker from "../Entities/Worker";
import DialogWorker from "./DialogWorker";
import Otdel from "../Entities/Otdel";

interface DocumentProp {
    worker: Worker
}
function CardWorker(prop: DocumentProp) {
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const [otdels, setOtdels] = useState<Otdel[]>([]);
    const { worker } = prop;
    useEffect(() => {
        getOtdels().then(data => {
            setOtdels(data);
        }).catch(err => console.log(err))
        return () => {

        }
    }, [])
    const deleteHandle = () => {
        deleteWorker(worker.id).then(result => { console.log(result) })
    }
    const handleClose = () => {
        setShowDialog(false);
    }

    const handleConfirm = (changeWorker: Worker) => {
        const c: Worker = {
            ...changeWorker,

            id: worker.id,
        }
        updateWorker(c).then(result => { console.log(result) });
        setShowDialog(false);
    }

    const handleOpen = () => {
        setShowDialog(true);
    }

    return (
        <Card border="dark">
            <Card.Header as="h5">{worker.firstName + worker.secondName}</Card.Header>
            <Card.Body>
                <h6>Отдел</h6>
                <Card.Title>{worker.otdelName}</Card.Title>
                <ButtonGroup size="sm" >
                    <Button variant="dark" onClick={() => deleteHandle()}>Delete</Button>
                    <Button variant="dark" onClick={() => handleOpen()}>Change</Button>
                    <Button variant="dark">Show</Button>
                </ButtonGroup>
                <DialogWorker title={"Изменение работника"} show={showDialog} handleClose={handleClose} handleConfirm={handleConfirm} otdels={otdels} worker={worker} />
            </Card.Body>
        </Card>
    )
}

export default CardWorker;