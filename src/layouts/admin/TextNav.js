import React from 'react';
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const TextNav = () => {
    const Div=styled.div`
    margin: 170px;

    `
    return (
        <Div>
        <Navbar>
        <Nav>
            <NavDropdown title="Medicament">
            <NavDropdown.Item><Link to='/'>Admin</Link>           
            </NavDropdown.Item>
            <NavDropdown.Item><Link to='/'>Admin</Link>           
            </NavDropdown.Item>
            <NavDropdown.Item><Link to='/admin'>Admin</Link>           
            </NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar>
        </Div>
        
    );
};

export default TextNav;