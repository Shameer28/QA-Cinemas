import { Navbar, Nav, Button, NavDropdown, FormControl, Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form'

const NavBar = () => {
    return (
        <Navbar class="nav" bg="dark" variant="dark">

            <Navbar.Brand href="/"> <img
                src="/cinema logo.png"
                width="150"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Movies" id="basic-nav-dropdown">
                        <NavDropdown.Item
                            href="/listinggallery">Now Showing</NavDropdown.Item>
                        <NavDropdown.Item
                            href="/newreleases">New Releases</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/openingtimes">Opening Times</Nav.Link>
                    <Nav.Link href="#pricing">Classifcations</Nav.Link>
                    <Nav.Link href="/ticketbookings">Bookings</Nav.Link>
                    <Nav.Link href="/placestogo">Places to Go </Nav.Link>
                    <Nav.Link href="gettingthere">Getting There</Nav.Link>
                    <Nav.Link href="/dicussionboard">Discussion Board</Nav.Link>
                    <Nav.Link href="/aboutpage">About Us</Nav.Link>
                    <Nav.Link href="/contactpage">Contact Us</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>

            </Navbar.Collapse>




        </Navbar>
    );
}
export default NavBar;