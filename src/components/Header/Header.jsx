import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../assets/logo.png'
const Header = () => {
    return (
        <Nav className=' header' variant='tabs'>

            <div className='d-flex align-items-center'>
                <img style={{width:'60%', height:'70%'}} src={logo} alt="" />
            </div>
            <NavLink className={({ isActive }) => isActive ? 'active' : ''}  to='/'>Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/about'>About</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : ''}  to='/chef/0'  >Recipes</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/submit-recipe'>Submit Recipe</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/chefs'  >Chefs</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/blogs'>Blogs</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/login'>Login</NavLink>

        </Nav>
    );
};

export default Header;