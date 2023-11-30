import React from 'react';
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import RightNav from '../shared/RightNav/RightNav';
import { styled } from '@mui/material/styles';
import bg3 from '../../assets/bg3.jpg'
import { Button } from '@mui/joy';
import { FaUpload } from "react-icons/fa6";
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
const SubmitRecipe = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${bg3})`,
                width: '100%',
                backgroundSize: 'cover',
                height: '200px',
                opacity: '0.9',
                color: 'black',
                marginBottom: '30px',
                paddingTop: '30px'
            }}>
                <h3 style={{ fontFamily: 'Noto Sans', fontWeight: '600', fontSize: '30px', color: 'white' }} className='text-center'>Are you ready to submit?</h3>
                <p className='text-center' style={{ color: '#000000', fontSize: '20px', fontFamily: 'Noto Sans', }}>If your Recipe is approved you will be honoured -_-</p>

            </div>
            <Container>
                <Row>
                    <Col lg={9}>
                        <p style={{ fontSize: '25px', fontFamily: 'Noto Sans' }}>Submit Your Recipe Here</p>
                        <hr style={{ border: '2px solid rgba(215, 123, 24, 0.962)' }} />
                        <br />
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Recipe title</Form.Label>
                                <Form.Control type="text" placeholder="title of your racipe" required />
                                <br />
                                <Form.Label>Short description</Form.Label>
                                <Form.Control type="text" placeholder="describe your recipe in brief" required />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Contents of your Recipe</Form.Label>
                                <Form.Control as="textarea" rows={3} required />
                            </Form.Group>
                            <span>Upload a photo of your recipe </span>
                            <Button className='bg-primary text-light' component="label" variant="contained-primary" required>
                                 Upload file <FaUpload /> 
                                <VisuallyHiddenInput type="file" />
                            </Button>
                            <br />
                            <br />
                            <Form.Label>Difficulty</Form.Label>
                            <Form.Control type="text" placeholder="Easy/ Intermediate/ Hard" required />
                            <br />
                            <div className='d-flex'>
                                <div style={{ marginRight: '10%' }}>
                                    <Form.Label>Cooking time</Form.Label>
                                    <Form.Control type="text" placeholder="Cooking time in minutes" required />
                                </div>
                                <div>
                                    <Form.Label>Cuisine</Form.Label>
                                    <Form.Control type="text" placeholder="Cuisine" required />
                                </div>
                            </div>
                            <br />
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Ingredients</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder='1/' required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Methods</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder='1/' required />
                            </Form.Group>
                            <Button className='bg-primary' type="submit">
                                Send Response
                            </Button>
                        </Form>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SubmitRecipe;