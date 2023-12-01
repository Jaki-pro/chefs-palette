import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Nav className=' justify-content-center header' variant='tabs'>


            <p className='logo'>Chefs Palette</p>


            <NavLink className={({ isActive }) => isActive ? 'active' : ''}  to='/'>Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/about'>About</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : ''}  to='/chef/0'  >Recipes</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/submit-recipe'>Submit Recipe</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/chefs'  >Chefs</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/blogs'>Blogs</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/sdfsd'>Login</NavLink>

        </Nav>
    );
};

export default Header;