import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { createOrganization, getOrganizations } from "../api";
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
    const crtOrg = () => {
        const org: Organization = {
            addressIndex: '3',
            id: 0,
            name: "3",
            city: "3",
            phone: "3",
            faks: "3",
            email: "3"
        }
        createOrganization(org).then(result => { console.log(result) });
    }
    return (
        <div>
            <Container>
                <h1>Organizations</h1>
                <Button variant="primary" size="lg" onClick={() => { crtOrg() }}>
                    CreateOrganization
                </Button>
                <Row>
                    {organizations?.map(organization => <Col xs={6}><CardOrganization organization={organization} /></Col>)}
                </Row>
            </Container>
        </div>
    )
}

export default OrganizationsPage