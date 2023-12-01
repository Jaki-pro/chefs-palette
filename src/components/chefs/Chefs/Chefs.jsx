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
                padding: '40px',
                marginBottom: '7%'

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
                                    <img className=' ' style={{ height: '240px', width: '70%' }} src={chef.img} alt="" />
                                </div>

                                <Link style={{ width: '' }} className='text-decoration-none ' to={`/chef-details/${chef.chefId}`}>
                                    <div className='text-center bg-warning p-1' style={{border:'2px solid lightgrey', lineHeight:'5px', borderRadius:'5px'}}>
                                        <h4 className='' style={{ fontSize: '', fontFamily: 'Noto Sans' }}>{chef.chefName}</h4>
                                        <p className='text-muted'>-{chef.post}</p>
                                    </div>

                                </Link>


                            </div>)
                        }</Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        </div>

    );
};

export default Chefs;