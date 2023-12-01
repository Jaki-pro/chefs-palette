import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import recipeBg2 from '../../../assets/recipesBg2.jpg'
const ChefDetails = () => {
    const chef = useLoaderData();
    console.log(chef);
    return (
        <div>
            <div className='' style={{
                backgroundImage: `url(${recipeBg2})`,
                width: '100%',
                backgroundSize: 'cover',
                height: '200px',
                opacity: '0.9',
                color: 'black',
                padding: '40px'

            }}>
                <h3 style={{ fontFamily: 'Noto Sans', fontWeight: '600', color: 'black' }} className='text-center'>Details Of <span className='text-warning'>{chef.chefName}</span></h3>
            </div>
            <Container>
                <Row className='mt-4' style={{ width: '100%' }}>
                    <Col md={1}>
                    </Col>
                    <Col className=' bg-light p-4  mt-3 d-flex' md={10}>
                        <div>
                            <Card className=' ' style={{ width: '100%', border: '0', }}>
                                <Card.Body className='bg-light'>
                                    <Card.Title style={{ fontFamily: 'Noto Sans', fontSize: '35px', fontWeight: '800' }}>{chef.chefName}</Card.Title>
                                    <h4 className='text-muted p-1' style={{width:'45%',borderBottom:'2px solid yellow'}}>-{chef.post}</h4>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className=' w-75'>
                            <img src={chef.img} style={{ width: '100%' }} alt="" />
                        </div>
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default ChefDetails;