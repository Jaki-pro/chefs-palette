import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../LeftNav/LeftNav';
import { useLoaderData } from 'react-router-dom'; 
import HomeCard from '../../Home/HomeCard/HomeCard';
import './Containers.css'
import RightNav from '../../shared/RightNav/RightNav';
import bg4 from '../../../assets/bg4.jpg'
const Containers = () => {
    const recipes = useLoaderData();
    return (
        <div className=''>
            <div className='mb-3' style={{
                backgroundImage: `url(${bg4})`,
                width: '100%',    
                backgroundSize:'cover',  
                height:'200px', 
                opacity:'0.9',
                color:'black',
                padding:'20px'
                
            }}>
                <h3 style={{fontFamily:'Noto Sans', fontWeight:'600'}} className='text-light text-center'>All recipes are here for you</h3>
                <p className='text-light text-center'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                 
            </div>
            <Container className='p-2 mt-5'>
                <Row>
                    <Col sm={2} className='p-2'>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col sm={7} className='recipe-home' style={{ height: '30%' }}>
                        {
                            recipes.map(recipe => <HomeCard isFromContainer={true} recipe={recipe} key={recipe.id}></HomeCard>)
                        }
                    </Col>
                    <Col sm={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Containers;