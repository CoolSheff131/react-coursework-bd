import { Button, ButtonGroup, Card } from "react-bootstrap";
import Journal from "../Entities/Journal";

interface DocumentProp {
    journal: Journal
}
function CardJournal(prop: DocumentProp) {
    const { journal } = prop;
    return (
        <Card border="dark">
            <Card.Header as="h5">{journal.documentNumber}</Card.Header>
            <Card.Body>
                <h6>Название документа</h6>
                <Card.Title>{journal.documentId}</Card.Title>
                <Card.Text>
                    <h6>ФИО Работника</h6>
                    {journal.workerId}
                    <h6>Тип действия</h6>
                    {journal.actionType}
                </Card.Text>
                <ButtonGroup size="sm" >
                    <Button variant="dark">Delete</Button>
                    <Button variant="dark">Change</Button>
                    <Button variant="dark">Show</Button>
                </ButtonGroup>
            </Card.Body>
        </Card>
    )
}

export default CardJournal;