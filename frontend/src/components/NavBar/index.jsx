import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';

import { useAuth } from '../../context';

import logo from '../../assets/Cramodoro Favicon.png'



import { PomodoroTimer } from '..'



const styles = ({ isActive }) => ({ color: isActive ? '#ECD444' : 'black' });

const PageWrapper = () => {
    const {setUser} = useAuth()
    const navigate = useNavigate()

    const handleClick = () => {
        setUser(null)
        navigate('/')
    }

    return <>
        <header>
            <Navbar bg="light" expand="lg" fixed="top">
                <Container fluid>
                        <img src={logo} alt="Music App Logo" className="logo" style={{ width: '4%', marginRight: '20px' }} />
                    <Navbar.Brand as={NavLink} to='/' >CRAMODORO</Navbar.Brand>

                    <Form className="d-flex mx-5">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                    <Nav className="justify-content-end flex-grow-1 pe-3">

                        <PomodoroTimer />


                        <Nav.Link as={NavLink} to='/' style={{ styles }}>Home</Nav.Link>
                        <Nav.Link as={NavLink} to='/dashboard' style={{ styles }}>Dashboard</Nav.Link>

                        <NavDropdown title="Subjects" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">
                                Maths
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action4">
                                Science
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                History
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action6">
                                Geography
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link as={NavLink} to='/dashboard' style={{ styles }} disabled>Quizzes</Nav.Link>
                        <Nav.Link as={NavLink} to='/flashcards' style={{ styles }} >Flashcards</Nav.Link>
                        <a onClick={handleClick}>Logout</a>


                    </Nav>
                </Container>
            </Navbar>
        </header>
        <Outlet />
    </>
};

export default PageWrapper;
