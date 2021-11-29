import { Button, ButtonGroup, Card } from "react-bootstrap";
import { deleteOrganization } from "../api";
import Organization from "../Entities/Organization";

interface DocumentProp {
    organization: Organization
}
function CardOrganization(prop: DocumentProp) {
    const { organization } = prop;
    const deleteHandle = () => {
        deleteOrganization(organization.id).then(result => { console.log(result) })
    }
    return (
        <Card border="dark">
            <Card.Header as="h5">{organization.name}</Card.Header>
            <Card.Body>
                <Card.Text>
                    <h6>Индекс</h6>
                    {organization.addressIndex}
                    <h6>Город</h6>
                    {organization.city}
                    <h6>Почта</h6>
                    {organization.email}
                    <h6>Факс</h6>
                    {organization.faks}
                    <h6>Телефок</h6>
                    {organization.phone}
                </Card.Text>
                <ButtonGroup size="sm" >
                    <Button variant="dark" onClick={() => deleteHandle()}>Delete</Button>
                    <Button variant="dark">Change</Button>
                    <Button variant="dark">Show</Button>
                </ButtonGroup>
            </Card.Body>
        </Card>
    )
}

export default CardOrganization;