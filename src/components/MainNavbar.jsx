import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function MainNavbar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                    <Link to="/" className="navbar-brand">Navbar</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/" className="nav-link">Home</Link>
                            {/* <Nav.Link href="/">Home</Nav.Link> */}
                            <Link to="/about" className="nav-link">About</Link>
                            {/* <Nav.Link href="/about">About</Nav.Link> */}
                            <Link to="/projects" className="nav-link">Projects</Link>
                            <Link to="/contact" className="nav-link">Contact</Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <Link to="/contact" className="dropdown-item">Contact</Link>
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
