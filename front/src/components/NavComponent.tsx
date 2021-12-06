import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

function NavComponent() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Archive</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/document" className="nav-link">document</Link>
                    <Link to="/journal" className="nav-link">journal</Link>
                    <Link to="/organization" className="nav-link">organization</Link>
                    <Link to="/otdel" className="nav-link">otdel</Link>
                    <Link to="/worker" className="nav-link">worker</Link>
                    <Link to="/report" className="nav-link">report</Link>
                    <Link to="/login" className="nav-link">login</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default NavComponent;