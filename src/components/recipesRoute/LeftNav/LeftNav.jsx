import React, { useEffect, useState } from 'react';
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
            <h3 style={{ fontFamily: 'DM Serif Display serif' }}>Choose chef</h3>
            {
                chefs.map(chef=> <Link to={`/chef/${chef.chefId}`} style={{textDecoration:'none'}} key={chef.chefId}><ListGroup.Item className='text-primary'>{chef.chefName}</ListGroup.Item> </Link>)
            }
            <Link style={{textDecoration:'none'}}  to='/chef/0'><ListGroup.Item className='text-primary'>All Recipes</ListGroup.Item></Link>
            
        </ListGroup>
    );
};

export default LeftNav;