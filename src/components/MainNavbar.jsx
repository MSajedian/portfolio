import { Container, Nav, Navbar } from 'react-bootstrap';
import { GrLinkedin } from 'react-icons/gr';
import { ImGithub } from 'react-icons/im';
import { Link, useRouteMatch } from 'react-router-dom';

function CustomNavLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return (
        <Link className={match ? "active nav-link fs-4 text-white" : "nav-link fs-5"} to={to}>{label}</Link>
    );
}

export default function MainNavbar() {
    return (
        <>
            <Navbar collapseOnSelect
                expand="lg"
                // bg="dark" 
                // variant="light"
                className="customNavBar"
            >
                <Container>
                    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                    <Link to="/" className="navbar-brand"><img src="my-emoji.png" alt="My Emoji" width="50" height="50" /></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <CustomNavLink to="/" className="nav-link fs-5" label="Home" activeOnlyWhenExact={true} />
                            {/* <Nav.Link href="/">Home</Nav.Link> */}
                            <CustomNavLink to="/about" className="nav-link fs-5" label="About" />
                            {/* <Nav.Link href="/about">About</Nav.Link> */}
                            <CustomNavLink to="/projects" className="nav-link fs-5" label="Projects" />
                            <CustomNavLink to="/contact" className="nav-link fs-5" label="Contact" />
                            {/* <Button className="" variant="dark" onClick={() => (history.push("/contact"))}>Contact</Button> */}

                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <Link to="/contact" className="dropdown-item">Contact</Link>
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                            <Nav.Link className="fs-4" href="https://www.linkedin.com/in/mohammadamin-sajedian" target="_blank"><GrLinkedin /></Nav.Link>
                            <Nav.Link className="fs-4" href="https://github.com/MSajedian" target="_blank"><ImGithub /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
