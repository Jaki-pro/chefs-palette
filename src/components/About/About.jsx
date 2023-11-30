import React from 'react';
import bg5 from '../../assets/bg5.jpg'
import { Card, Col, Container, Row } from 'react-bootstrap';
import chef1 from '../../assets/chef1.png'
import jaki from '../../assets/jaki.jpg'
import { MdFreeBreakfast, MdOutlineLunchDining, MdDinnerDining, MdNoDrinks } from "react-icons/md";
import { LuDessert } from "react-icons/lu";
import { IoFastFoodSharp } from "react-icons/io5";
import amd from '../../assets/AMD.jpg'
import md from '../../assets/MD.jpg'

const About = () => {
    return (
        <div>
            <div className='' style={{
                backgroundImage: `url(${bg5})`,
                width: '100%',
                backgroundSize: 'cover',
                height: '200px',
                opacity: '0.9',
                color: 'black',
                padding: '20px'

            }}>
                <h3 style={{ fontFamily: 'Noto Sans', fontWeight: '600' }} className='text-light text-center'>About Us</h3>
            </div>
            <div className='bg-light'>
                <Container>
                    <Row>
                        <Col md={2}>
                        </Col>
                        <Col md={5}>
                            <Card className='bg-light' style={{ width: '100%', border: '0', marginTop: '20%' }}>
                                <Card.Body>
                                    <Card.Title style={{ fontFamily: 'Noto Sans', fontSize: '35px', fontWeight: '800' }}>We Care <span className='text-warning'>About </span><br /><span className='text-warning'>Taste</span> of Food</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={5}>
                            <img src={chef1} style={{ width: '60%' }} alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className='mt-5'>
                <Row>
                    <Col md={1}>
                    </Col>
                    <Col className='' md={10}>
                        <h2 style={{ fontFamily: 'Noto Sans', fontWeight: '600' }} className='text-center'>Our Services</h2>
                        <hr />
                        <br />
                        <div className='d-flex justify-content-evenly'>
                            <div>
                                <h4 style={{ fontFamily: 'Noto Sans', fontWeight: '600' }}  ><MdFreeBreakfast className='text-warning' /> Breakfast</h4>
                                <p className='w-75'>We are committed to serve best dishes</p>
                            </div>
                            <div>
                                <h4 style={{ fontFamily: 'Noto Sans', fontWeight: '600' }} ><MdOutlineLunchDining className='text-warning' /> Lunch</h4>
                                <p className='w-75'>We are committed to serve best dishes</p>
                            </div>
                            <div>
                                <h4 style={{ fontFamily: 'Noto Sans', fontWeight: '600' }} ><MdDinnerDining className='text-warning' /> Dinner</h4>
                                <p className='w-75'>We are committed to serve best dishes</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-evenly mt-3'>
                            <div>
                                <h4 style={{ fontFamily: 'Noto Sans', fontWeight: '600' }} ><MdNoDrinks className='text-warning' /> Drinks</h4>
                                <p className='w-75'>We are committed to serve best dishes</p>
                            </div>
                            <div>
                                <h4 style={{ fontFamily: 'Noto Sans', fontWeight: '600' }} ><LuDessert className='text-warning' /> Dessert</h4>
                                <p className='w-75'>We are committed to serve best dishes</p>
                            </div>
                            <div>
                                <h4 style={{ fontFamily: 'Noto Sans', fontWeight: '600' }} ><IoFastFoodSharp className='text-warning' /> Snacks</h4>
                                <p className='w-75'>We are committed to serve best dishes</p>
                            </div>
                        </div>

                    </Col>
                    <Col md={1}>
                    </Col>

                </Row>
                <Row className='mt-5 p-3' style={{backgroundColor:'#f0ebe5'}}>
                    <Col md={1}>
                    </Col>
                    <Col md={10}>
                        <div className='d-flex justify-content-evenly'>
                            <Card style={{ width: '14rem', padding:'5px', backgroundColor:'#f6f5f4'}}>
                                <div className='d-flex justify-content-center'>
                                    <Card.Img style={{ width: '80px' , borderRadius:'70%'}} variant="top" src={jaki} />
                                </div>
                                <Card.Body>
                                    <Card.Title style={{fontFamily:'Noto Sans'}} className='text-center'>Jakaria Hossain</Card.Title>
                                    <Card.Text className='text-center'>C.E.O</Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '14rem', padding:'5px', backgroundColor:'#f6f5f4'}}>
                                <div className='d-flex justify-content-center'>
                                    <Card.Img style={{ width: '80px' , borderRadius:'70%'}} variant="top" src={md} />
                                </div>
                                <Card.Body>
                                    <Card.Title style={{fontFamily:'Noto Sans'}}  className='text-center'>Ricky Jansen</Card.Title>
                                    <Card.Text className='text-center'>
                                        M.D
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '14rem', padding:'5px', backgroundColor:'#f6f5f4'}}>
                                <div className='d-flex justify-content-center'>
                                    <Card.Img style={{ width: '80px' , borderRadius:'70%'}} variant="top" src={amd} />
                                </div>
                                <Card.Body>
                                    <Card.Title style={{fontFamily:'Noto Sans'}}  className='text-center'>Juliya Taylor</Card.Title>
                                    <Card.Text className='text-center'>A.M.D</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md={1}>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;