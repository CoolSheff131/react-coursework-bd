import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getOrganizations } from "../api";
import CardOrganization from "../components/CardOrganization";
import Organization from "../Entities/Organization"

function OrganizationsPage() {
    const [organizations, setOrganiaions] = useState<Organization[]>()
    useEffect(() => {
        getOrganizations().then(data => {
            setOrganiaions(data);
        }).catch(err => console.log(err)
        )
        return () => {

        }
    }, [])
    return (
        <div>
            <Container>
                <h1>Organizations</h1>
                <Row>
                    {organizations?.map(organization => <Col xs={6}><CardOrganization organization={organization} /></Col>)}
                </Row>
            </Container>
        </div>
    )
}

export default OrganizationsPage