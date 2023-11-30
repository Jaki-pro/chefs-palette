import React, { useEffect, useState } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <ListGroup>
            <h3 style={{fontFamily:'Noto Sans'}}>Choose chef</h3>
            {
                chefs.map(chef=> <Link className='m-1 ' to={`/chef/${chef.chefId}`} style={{textDecoration:'none'}} key={chef.chefId}><AwesomeButton className='w-100'>{chef.chefName}</AwesomeButton> </Link>)
            }
            <Link className='m-1' style={{textDecoration:'none'}}  to='/chef/0'><AwesomeButton type='secondary' className='w-100'>All Recipes</AwesomeButton></Link>
            
        </ListGroup>
    );
}; 
export default LeftNav;