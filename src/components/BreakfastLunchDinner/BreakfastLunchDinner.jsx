import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../shared/RightNav/RightNav';
import { useLoaderData, useParams } from 'react-router-dom';
import HomeCard from '../Home/HomeCard/HomeCard';

const BreakfastLunchDinner = () => {
    const recipes = useLoaderData();
    const period = useParams();
    //console.log(period.time);
    return (
        <div className='mt-5'>

            <Container>

                <h2 style={{ fontFamily: 'Noto Sans', textAlign: 'center' }} >Here is your Awesome <span className='text-warning'>{period.time} </span>Recipes</h2>
                <br />
                <Row>
                    <Col md={1}></Col>
                    <Col md={8} className='recipe-home' style={{ height: '30%' }}>
                        {
                            recipes.map(recipe => <HomeCard recipe={recipe} key={recipe.id}></HomeCard>)
                        }
                    </Col>
                    <Col md={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BreakfastLunchDinner;