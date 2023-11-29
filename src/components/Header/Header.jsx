import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Nav className=' justify-content-center header' variant="tabs" >

            <Nav.Item>
                <p className='logo'>Chef's Palette</p>
            </Nav.Item> 
            <Nav.Item>
                <Nav.Link as={Link}  eventKey="link-1" to='/'>Home</Nav.Link>
            </Nav.Item> 
            <Nav.Item>
                <Nav.Link as={Link}  eventKey="link-2">About</Nav.Link>
            </Nav.Item> 
            <Nav.Item>
                <Nav.Link as={Link} to='/chef/0'  eventKey="link-3">Recipes</Nav.Link>
            </Nav.Item> 
            <Nav.Item>
                <Nav.Link as={Link}  eventKey="link-4" to='/submit-recipe'>Submit Recipe</Nav.Link>
            </Nav.Item> 
            <Nav.Item>
                <Nav.Link as={Link}  eventKey="link-5">Option 2</Nav.Link>
            </Nav.Item> 
            <Nav.Item>
                <Nav.Link as={Link}  eventKey="link-6">Option 2</Nav.Link>
            </Nav.Item> 
        </Nav>
    );
};

export default Header;