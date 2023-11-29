import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import caro1 from '../../assets/caro1.jpg'
import caro2 from '../../assets/caro2.jpg'
import caro3 from '../../assets/caro3.jpg'
import caro4 from '../../assets/caro4.jpg'
const Carosel = () => {
    return (
        <div className='p-3 ' style={{  width:'70%', marginLeft:'15%'}}>
            <h3 style={{fontFamily: 'DM Serif Display serif'}}>Featured Recipes</h3>
            <Carousel className='' style={{borderRadius:'5px'}} >
                <Carousel.Item>
                    <img style={{borderRadius:'5px', height:'300px'}}  className='d-block w-100' src={caro1} alt="" />
                    <Carousel.Caption>
                        <h3 style={{fontFamily: 'DM Serif Display serif'}}>Spicy Tomato Salat</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{borderRadius:'5px', height:'300px'}}  className='d-block w-100' src={caro2} alt="" />
                    <Carousel.Caption>
                        <h3 style={{fontFamily: 'DM Serif Display serif', color: 'grey'}}>Varsetile Fruits</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{borderRadius:'5px', height:'300px'}}  className='d-block w-100' src={caro3} alt="" />
                    <Carousel.Caption>
                        <h3 style={{fontFamily: 'DM Serif Display serif'}}>Awsome Vegitables</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{borderRadius:'5px', height:'300px'}}  className='d-block w-100' src={caro4} alt="" />
                    <Carousel.Caption>
                        <h3 style={{fontFamily: 'DM Serif Display serif'}}>Bengali Singara</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carosel;