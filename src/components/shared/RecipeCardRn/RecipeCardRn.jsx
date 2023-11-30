import React from 'react';
import { ListGroup } from 'react-bootstrap';

const RecipeCardRn = ({ recipe }) => {
    //console.log(recipe);
    const {img, title} = recipe;
    return (
        <ListGroup className='mb-3'>
            
            <ListGroup.Item className='d-flex p-2' style={{justifyContent:'space-evenly', backgroundColor:'#fbb163' }}>
                <img style={{width:'30%' , marginRight:'20px', borderRadius:'5px'}} className=' mr-6' src={img} alt="" />
                <p  style={{fontFamily: 'DM Serif Display serif'}} className='flex-grow-1'>{title}</p>
            </ListGroup.Item> 
        </ListGroup>
    );
};
RecipeCardRn.propTypes;
export default RecipeCardRn;