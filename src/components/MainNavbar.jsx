import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { GrLinkedin } from 'react-icons/gr';
import { ImGithub } from 'react-icons/im';

export default function MainNavbar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="">
                <Container>
                    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                    <Link to="/" className="navbar-brand"><img src="my-emoji.png" alt="My Emoji" width="50" height="50" /></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Link to="/" className="nav-link fs-5">Home</Link>
                            {/* <Nav.Link href="/">Home</Nav.Link> */}
                            <Link to="/about" className="nav-link fs-5">About</Link>
                            {/* <Nav.Link href="/about">About</Nav.Link> */}
                            <Link to="/projects" className="nav-link fs-5">Projects</Link>
                            <Link to="/contact" className="nav-link fs-5">Contact</Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <Link to="/contact" className="dropdown-item">Contact</Link>
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                            <Nav.Link className="fs-4" href="https://www.linkedin.com/in/mohammadamin-sajedian-6a001471" target="_blank"><GrLinkedin /></Nav.Link>
                            <Nav.Link className="fs-4" href="https://github.com/MSajedian" target="_blank"><ImGithub /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
