import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { useTypedSelector } from '../hooks/useTypedSelector';
import { unSetUser } from '../store/action-creators/user';

function NavComponent() {
    const { login, role } = useTypedSelector(state => state.user)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(unSetUser());
        navigate('/login')
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Archive</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/document" className="nav-link">document</Link>
                    <Link to="/journal" className="nav-link">journal</Link>
                    {(role === "DIRECTOR" || role === "ADMIN") && <Link to="/organization" className="nav-link">organization</Link>}
                    {(role === "ORGANIZATION" || role === "ADMIN") && <Link to="/otdel" className="nav-link">otdel</Link>}
                    {(role === "OTDEL" || role === "ADMIN") && <Link to="/worker" className="nav-link">worker</Link>}
                    {(role === "ARCHIVE" || role === "WORKER" || role === "ADMIN") && <Link to="/report" className="nav-link">report</Link>}

                </Nav>

                {login ? <NavDropdown title={login} id="navbarScrollingDropdown">
                    <NavDropdown.Item onClick={handleLogout}>Выйти</NavDropdown.Item>
                </NavDropdown> : <Link to="/login" className="nav-link">login</Link>}

            </Container>
        </Navbar>
    )
}
export default NavComponent;