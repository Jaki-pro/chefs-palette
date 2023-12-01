import React, { useState } from 'react';
import { Button, Card, CardGroup, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import RightNav from '../../shared/RightNav/RightNav';
import { CiTimer } from 'react-icons/ci';
import { PiHeartFill } from "react-icons/pi";
import { GoPersonFill } from "react-icons/go";
import { MdHardware } from "react-icons/md";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { FaHandPointRight } from "react-icons/fa";
import bg4 from '../../../assets/bg4.jpg'
const RecipeDetails = () => {
    const navigete = useNavigate();
    const hangleNavigate =() =>{
        navigete(-1);
    }
    const recipe = useLoaderData();
    const { img, title, chefName, cook_time, difficulty, likes, cuisine, ingredients, instructions } = recipe;
    let ke=0;
    const loves = parseInt(likes);
    const [like, setLike] = useState(loves);
    return (
        <div>
            <div className='mb-3' style={{
                backgroundImage: `url(${bg4})`,
                width: '100%',    
                backgroundSize:'cover',  
                height:'200px', 
                opacity:'0.9',
                color:'black',
                padding:'20px'
                
            }}>
                <h3 style={{fontFamily:'Noto Sans', fontWeight:'600'}} className='text-light text-center'>Recipe: {title}</h3>
                <p style={{color:'green'}} className='text-center'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                 
            </div>
            <Container className='mt-5'>
                <Row className='p-2'>
                    <Col lg={9}>
                        <div>
                            <Card style={{ border: '0', width: '80%', textAlign: 'center', height: '50%' }}>
                                <Card.Img variant="top" src={img} />
                            </Card>
                        </div>
                        <div>
                            <Card style={{ width: '80%', border: '0' }}>
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted"> <small>{cuisine}</small></Card.Subtitle>
                                    <div className='d-flex'>
                                        <p style={{ width: '35%', height: '25px', paddingRight: '5px', paddingLeft: '5px', }}> <small><GoPersonFill />by {chefName}</small> </p>
                                        <p style={{ width: '35%', paddingRight: '5px', height: '25px', paddingLeft: '5px', }}><small><CiTimer className='text-primary'></CiTimer>Cooking time: {cook_time}'</small></p>
                                        <p style={{ width: '45%', paddingRight: '5px', height: '25px', paddingLeft: '5px', }}><small><MdHardware></MdHardware>Difficulty: {difficulty}</small> </p>
                                        <p style={{ width: '25%', paddingRight: '5px', paddingLeft: '5px', }}><small><PiHeartFill onClick={() => setLike(like + 1)} className='text-danger' />{like}</small> </p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <hr />
                        <br />
                        <p style={{ textAlign: 'justify' }}>No more scouring reviews before attempting that dish you've been dying to make. We've done the work for you by rounding up the dinner recipes that have earned thousands of 5-star reviews from our Allrecipes community of home cooks. Scroll through for our 55 most foolproof, best-of-the-best dinner recipes, including chicken pot pie, lasagna</p>
                        <div>
                            <CardGroup>
                                <Card style={{ width: '40%', marginRight: '10px' }}>
                                    <ListGroup>
                                        <ListGroup.Item><h3 className='text-center'>Steps of methods</h3> </ListGroup.Item>
                                        {
                                            instructions.map(step => <ListGroup.Item key={ke++}><FaHandPointRight className='text-warning' /> {step}</ListGroup.Item>)
                                        }
                                    </ListGroup>
                                </Card>
                                <Card style={{ width: '40%', marginRight: '5px' }}>
                                    <ListGroup>
                                        <ListGroup.Item><h3 className='text-center'>Ingredients</h3> </ListGroup.Item>
                                        {
                                            ingredients.map(item => <ListGroup.Item key={ke++}><VscDebugBreakpointLog className='text-warning' />{item.name}, {item.quantity}</ListGroup.Item>)
                                        }
                                    </ListGroup>
                                </Card>

                            </CardGroup>
                        </div>
                        <Link onClick={hangleNavigate}><Button className='w-100'>Go Back</Button></Link>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RecipeDetails;