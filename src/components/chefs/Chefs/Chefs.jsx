import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './Chefs.css'
import bg5 from '../../../assets/bg5.jpg'
const Chefs = () => {
    const chefs = useLoaderData();
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
                <h3 style={{ fontFamily: 'Noto Sans', fontWeight: '600' }} className='text-light text-center'>Our Chefs</h3>
            </div>
            <Container>
                <Row>
                    <Col md={1}></Col>
                    <Col md={10} className='chefs'>
                        {

                            chefs.map(chef => <div className='w-75' key={chef.chefId}>
                                <div className='d-flex justify-content-evenly'>
                                    <img className=' ' style={{ height: '200px', width: '40%' }} src={chef.img} alt="" />
                                </div> 
                                <div style={{ border: '2px solid lightgrey' }} className='m-2 p-2 text-center'>
                                    <Link className='text-decoration-none' to={`/chef-details/${chef.chefId}`}>
                                        <h4 className=''>{chef.chefName}</h4>
                                        <p className=''>{chef.post}</p>
                                    </Link>
                                </div>

                            </div>)
                        }</Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        </div>

    );
};

export default Chefs;