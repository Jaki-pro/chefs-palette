import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    
    const navigate = useNavigate();

    const handleSignup = (event) =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(res=>{
            const loggedUser = res.user;
            form.reset();
            updateProfile(loggedUser, {
                displayName: name,
            })
            .then(()=>{
                navigate('/')
            })
            .catch()
            
        })
        .catch(e=>console.log(e))

    }
    
    const [terms, setTerms] = useState(false);
    const handleTerms =(event)=>{
        setTerms(event.target.checked);
        console.log(terms);
    }
    return (
        <div className='d-flex justify-content-center p-5'>
            <Form onSubmit={handleSignup} className='w-50'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" name='name' required /> 
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' required /> 
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check name='check' onClick={handleTerms} type="checkbox" label={<>Accept <Link to='/terms-conditions'>terms & conditions</Link></>} />
                </Form.Group>
                <Button disabled={!terms} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;