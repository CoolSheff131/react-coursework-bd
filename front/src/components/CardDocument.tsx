import { Button, ButtonGroup, Card } from "react-bootstrap";
import Document from "../Entities/Document";

interface DocumentProp {
    document: Document
}
function CardDocument(prop: DocumentProp) {
    const { document } = prop;
    return (
        <Card border="dark">
            <Card.Header as="h5">{document.name}</Card.Header>
            <Card.Body>
                <h6>Название организации</h6>
                <Card.Title>{document.organizationName}</Card.Title>
                <Card.Text>
                    <h6>ФИО автора</h6>
                    {document.firstNameAuthor} {document.secondNameAuthor}
                    <h6>Номер</h6>
                    {document.number}
                    <h6>Количество страниц</h6>
                    {document.pageCount}
                    <h6>Тип документа</h6>
                    {document.type}
                    <h6>Год</h6>
                    {document.year}
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

export default CardDocument;