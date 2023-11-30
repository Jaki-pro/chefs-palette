import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { IoMdPerson } from "react-icons/io";
import { CiTimer } from "react-icons/ci";
import { Link } from 'react-router-dom';

const HomeCard = ({recipe, isFromContainer}) => {
    const {title , img, chefName, cook_time, id, period} = recipe;
    return (
        <Card style={{ margin: '10px' }} className='bg-light'>
            <Card.Img className='w-100' variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div className='d-flex ' style={{justifyContent:'space-between'}}>
                    <p className='text-muted glex-grow-1'><IoMdPerson className='text-primary'></IoMdPerson><small>{chefName}</small></p>
                    <p><CiTimer className='text-primary'></CiTimer><small>{cook_time}</small></p>
                </div>
                <p className='text-muted'>-{period}</p>
                <Link to={`/recipe-details/${id}`}  style={{textDecoration:'none'}}><p style={{textAlign:'center',  fontFamily: 'DM Serif Display serif', fontSize:'20px' }}>Show Details</p> </Link>
            </Card.Body>
        </Card>
    );
};
HomeCard.propTypes;
export default HomeCard;