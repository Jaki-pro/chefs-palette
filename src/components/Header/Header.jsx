import React, { useContext } from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../assets/logo.png'
import { AuthContext } from '../../providers/AuthProviders';
import { CgProfile } from "react-icons/cg";

const Header = () => {
    const {user, logout} = useContext(AuthContext);

    const handleLogout =()=>{
        logout();
    }
    return (
        <Nav className=' header' variant='tabs'>

            <div className='d-flex align-items-center'>
                <img style={{ width: '60%', height: '70%' }} src={logo} alt="" />
            </div>
            <NavLink style={{marginRight:'2%'}} className={({ isActive }) => isActive ? 'active' : ''} to='/'>Home</NavLink>
            <NavLink style={{marginRight:'2%'}}  className={({ isActive }) => isActive ? 'active' : ''} to='/about'>About</NavLink>
            <NavLink style={{marginRight:'2%'}}  className={({ isActive }) => isActive ? 'active' : ''} to='/chef/0'  >Recipes</NavLink>
            <NavLink style={{marginRight:'2%'}}  className={({ isActive }) => isActive ? 'active' : ''} to='/submit-recipe'>Submit Recipe</NavLink>
            <NavLink style={{marginRight:'2%'}}  className={({ isActive }) => isActive ? 'active' : ''} to='/chefs'  >Chefs</NavLink>
            <NavLink style={{marginRight:'4%'}}  className={({ isActive }) => isActive ? 'active' : ''} to='/blogs'>Blogs</NavLink>
            {user&& <Link to='/profile'><CgProfile style={{fontSize:'34px'}} /></Link>}
            { user?
                <Link onClick={handleLogout} to='/login'><Button>Logout</Button> </Link>:
                <Link to='/login'><Button>Login</Button></Link>
            }

        </Nav>
    );
};

export default Header;