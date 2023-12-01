import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import recipeBg2 from '../../../assets/recipesBg2.jpg'
import { IoMdArrowRoundBack } from "react-icons/io";
import toast, { Toaster } from 'react-hot-toast';

const ChefDetails = () => {
    const chef = useLoaderData();
    //console.log(chef);
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(-1);
    } 

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
                    <Col className='p-4  mt-3 d-flex' style={{ backgroundColor: '#f1f1ef', borderRadius: '5px', height: '400px' }} md={10}>
                        <div className='m-5'>
                            <Card className=' ' style={{ width: '100%', border: '0', }}>
                                <Card.Body style={{ backgroundColor: '#f1f1ef' }}>
                                    <Card.Title style={{ fontFamily: 'Noto Sans', fontSize: '35px', fontWeight: '800' }}>{chef.chefName}</Card.Title>
                                    <h4 className='text-muted p-1' style={{ width: '45%', borderBottom: '2px solid #cacabb' }}>-{chef.post}</h4>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build
                                    </Card.Text>
                                    <h4 className='text-danger' style={{ fontFamily: 'Noto sans', borderBottom: '' }}>{chef.experience} years of experience</h4>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className=' w-75'>
                            <img src={chef.img} style={{   height: '100%' }} alt="" />
                        </div>
                    </Col>
                    <Col md={1}></Col>
                    <div className='d-flex justify-content-center'>
                        <Link to='/enrollment'><Button variant='warning' style={{ width: '200px' }} className=''>Request Enrollment</Button></Link>
                        <Link onClick={handleNavigate}><Button style={{ width: '200px' }} className='mx-2'><IoMdArrowRoundBack /> Go Back</Button></Link>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default ChefDetails;