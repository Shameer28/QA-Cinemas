import { Navbar, Nav, Button, NavDropdown, FormControl } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import Logo from '../img/Logo.png';
import { Image } from "react-bootstrap";

import { useState } from "react"

const NavBar = () => {

	const [search, setSearch] = useState("");

	const startSearch = (e) => {
		e.preventDefault();

		window.location.href = "/search/" + encodeURIComponent(search)
	}


    return (
        <Navbar className="nav" bg="dark" variant="dark">

            <Navbar.Brand href="/" id="navlogo"> <Image
                src={Logo}
                width="45%"
                className="d-inline-block align-top"
                style={{marginLeft:"60%"}}
                alt="React Bootstrap logo"
                rounded
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Movies" id="basic-nav-dropdown">
                        <NavDropdown.Item
                            href="/nowshowing">Now Showing</NavDropdown.Item>
                        <NavDropdown.Item
                            href="/newreleases">New Releases</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/openingtimes">Opening Times</Nav.Link>
                    <Nav.Link href="/classification">Classifications</Nav.Link>
                    <Nav.Link href="/ticketbookings">Bookings</Nav.Link>
                    <Nav.Link href="/screens">Screens</Nav.Link>
                    <Nav.Link href="/placestogo">Places to Go </Nav.Link>
                    <Nav.Link href="/gettingthere">Getting There</Nav.Link>
                    <Nav.Link href="/discussionboard">Discussion Board</Nav.Link>
                    <Nav.Link href="/aboutpage">About Us</Nav.Link>
                    <Nav.Link href="/contactpage">Contact Us</Nav.Link>
                </Nav>
                <Form className="d-flex" id="navsearch" onSubmit={startSearch}>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
						value = {search}
						onChange = { (e)=> {
							e.preventDefault();
							setSearch(e.target.value);
						}
						}
                    />
                    <Button onClick = {startSearch} variant="outline-success">Search</Button>
                </Form>

            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavBar;