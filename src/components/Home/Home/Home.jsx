import React from 'react';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import thumbnail1 from '../../../assets/thumbnail1.jpg'
import thumbnail3 from '../../../assets/thumbnail3.jpg'

// import caro1 from '../../assets/caro1.jpg' 
// import caro2 from '../../assets/caro2.jpg' 
// import caro3 from '../../assets/caro3.jpg' 
// import caro4 from '../../assets/caro4.jpg' 

import './Home.css'
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { Link, useLoaderData } from 'react-router-dom';
import { FaCoffee, FaCoins, FaPizzaSlice } from "react-icons/fa";
import Carosel from '../../small/Carosel'; 
import RightNav from '../../shared/RightNav/RightNav';
import RecipesHome from '../RecipesHome/RecipesHome';

const Home = () => {

    return (
        <Container>
            <Card className="bg-dark text-white">
                <Card.Img style={{ height: '500px', filter: ' blur(2px)' }} src={thumbnail1} alt="Card image" />
                <Card.ImgOverlay className='center'>
                    <div className='text-center'>
                        <h1 className='title-thumb fontFamily'>Committed To Serve The Best Dishes</h1>
                        <Card.Text>
                            <small>Have Fun</small>
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </div>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white">
                <Card.Img style={{ height: '200px', filter: ' blur(3px)' }} src={thumbnail3} alt="Card image" />
                <Card.ImgOverlay className='center'>
                    <div className='text-center'>
                        <Link className='fontFamily2'><AwesomeButton type="danger">Browse Recipes</AwesomeButton></Link>
                        <div className='m-3 p-2'>
                            <Link className='m-2'><AwesomeButton type="primary"><FaCoffee style={{ margin: '5px' }}></FaCoffee> Breakfast</AwesomeButton></Link>
                            <Link className='m-2'><AwesomeButton type="primary"><FaCoins style={{ margin: '5px' }}></FaCoins> Lunch</AwesomeButton></Link>
                            <Link className='m-2'><AwesomeButton type="primary"><FaPizzaSlice style={{ margin: '5px' }}></FaPizzaSlice> Dinner</AwesomeButton></Link>
                        </div>
                    </div>
                </Card.ImgOverlay>
            </Card>
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
    );
};

export default Home;