import { Button, ButtonGroup, Card } from "react-bootstrap";
import Otdel from "../Entities/Otdel";

interface DocumentProp {
    otdel: Otdel
}
function CardOtdel(prop: DocumentProp) {
    const { otdel } = prop;
    return (
        <Card border="dark">
            <Card.Header as="h5">{otdel.name}</Card.Header>
            <Card.Body>
                <Card.Text>
                    <h6>ФИО босса</h6>
                    {otdel.firstNameBoss} {otdel.secondNameBoss}
                    <h6>Название организации</h6>
                    {otdel.organizationName}
                    <h6>Телефон</h6>
                    {otdel.phone}
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

export default CardOtdel;