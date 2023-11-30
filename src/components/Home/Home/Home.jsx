import React from 'react';
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import thumbnail1 from '../../../assets/thumbnail1.jpg'
import thumbnail3 from '../../../assets/thumbnail3.jpg'
import Marquee from "react-fast-marquee";
// import caro1 from '../../assets/caro1.jpg' 
// import caro2 from '../../assets/caro2.jpg' 
// import caro3 from '../../assets/caro3.jpg' 
// import caro4 from '../../assets/caro4.jpg' 

import './Home.css'
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { Link, } from 'react-router-dom';
import { FaCoffee, FaCoins, FaPizzaSlice } from "react-icons/fa";
import Carosel from '../../small/Carosel';
import RightNav from '../../shared/RightNav/RightNav';
import RecipesHome from '../RecipesHome/RecipesHome';

const Home = () => {

    return (
        <div>

            <div className='' style={{
                backgroundImage: `url(${thumbnail1})`,
                width: '100%',
                backgroundSize: 'cover',
                height: '400px',
                opacity: '0.9',
                color: 'black',
                padding: '40px'

            }}>
                <h3 className='text-center' style={{ fontFamily: 'Noto Sans', fontSize:'30px' }}>We Are Committed <span className='text-warning'>To</span> <br /><span className='text-warning'>Serve</span> The Best Dishes</h3>
                <p style={{fontWeight:'300'}} className='text-light text-center'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            </div>
            <div className='d-flex bg-secondary mb-5 p-2'>
                <div className='bx-1' style={{fontSize:'25px', fontFamily:'italic'}}><i>Breaking</i></div><Marquee className='text-light' style={{fontSize:'20px'}}><i>Main chef, Yazuk Zilan is giving opportunity of a session for a low cost..Grave the chance immediately.</i></Marquee>
            </div>
            <Container>

                <div className='text-center'>
                    <h2>Browse Your Required Recipes!</h2>
                    <div className='m-3 p-2'>
                        <Link className='m-2' to='/period/Breakfast'><AwesomeButton type="primary"><FaCoffee style={{ margin: '5px' }}></FaCoffee> Breakfast</AwesomeButton></Link>
                        <Link to='/period/Lunch' className='m-2'><AwesomeButton type="primary"><FaCoins style={{ margin: '5px' }}></FaCoins> Lunch</AwesomeButton></Link>
                        <Link to='/period/Dinner' className='m-2'><AwesomeButton type="primary"><FaPizzaSlice style={{ margin: '5px' }}></FaPizzaSlice> Dinner</AwesomeButton></Link>
                    </div>
                </div>
                <Container>
                    <Row className='mt-4'>
                        <Col sm={9}>
                            <Carosel></Carosel>
                            <RecipesHome></RecipesHome>
                        </Col>
                        <Col sm={3}>
                            <RightNav></RightNav>
                        </Col>
                    </Row>

                </Container>

            </Container>
        </div>
    );
};

export default Home;