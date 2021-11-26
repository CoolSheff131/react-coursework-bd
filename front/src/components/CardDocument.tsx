import { Button, ButtonGroup, Card } from "react-bootstrap";
import Document from "../Entities/Document";

interface DocumentProp {
    document: Document
}
function CardDocument(prop: DocumentProp) {
    const { document } = prop;
    return (
        <Card bg="dark" text="white">
            <Card.Header as="h5">{document.name}</Card.Header>
            <Card.Body>
                <Card.Title>{document.organizationName}</Card.Title>
                <Card.Text>
                    {document.firstNameAuthor} {document.secondNameAuthor}
                    {document.number}
                    {document.pageCount}
                    {document.type}
                    {document.year}
                </Card.Text>
                <ButtonGroup size="sm" >
                    <Button variant="light">Delete</Button>
                    <Button variant="light">Change</Button>
                    <Button variant="light">Show</Button>
                </ButtonGroup>
            </Card.Body>
        </Card>
    )
}

export default CardDocument;