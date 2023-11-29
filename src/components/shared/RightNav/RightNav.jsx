import React, { useEffect, useState } from 'react';
import RecipeCardRn from '../RecipeCardRn/RecipeCardRn';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import areyou from '../../../assets/areYouChef.jpeg'
const RightNav = () => {
    const [popularRecipes, setPopularRecipes] = useState([]);
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);
    useEffect(() => {
        setPopularRecipes(recipes.slice(12, 18))
    }, [recipes])
    return (
        <div>
            <div className='p-2 mt-1'>
                <h3 style={{ fontFamily: 'DM Serif Display serif' }}>Popular Recipes</h3>
                {
                    popularRecipes.map(recipe => <RecipeCardRn key={recipe.id} recipe={recipe}></RecipeCardRn>)
                }
            </div>
            <div>
                <h4 className='mt-4'>Find Us on</h4>
                <ListGroup>
                    <ListGroup.Item className='p-2 text-center'><Button style={{textDecoration:'none', fontSize:'20px'}} variant="link"> <FaFacebook></FaFacebook> Facebook</Button></ListGroup.Item>
                    <ListGroup.Item className='p-2 text-center'><Button style={{textDecoration:'none', fontSize:'20px'}}  variant="link"><FaTwitter></FaTwitter> Twitter</Button></ListGroup.Item>
                    <ListGroup.Item className='p-2 text-center'><Button style={{textDecoration:'none', fontSize:'20px'}}  variant="link"><FaInstagram className='text-danger'></FaInstagram> Instagram</Button></ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mt-3 ' style={{border:'5px solid yellow'}}>
                <Card style={{backgroundColor:'palegreen', width: '18rem' ,textAlign:'center', padding:'10px'}}>
                    <Card.Title>Are You a Chef?</Card.Title>
                    <div style={{textAlign:'center'}}>
                        <Card.Img className='w-50' variant="top" src={areyou} />
                    </div>
                    
                    <Card.Body> 
                        <Button variant="primary">Submit Your Recipe</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default RightNav;