import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useLocation, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import  { Toaster } from 'react-hot-toast';
 
const Login = () => {
    const {login, user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location?.state?.from?.pathname || '/'; 
    //console.log(from);
    const handleLogin = (event) =>{
        event.preventDefault();

        const form = event.target; 
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(res=>{
            const loggedUser = res.user; 
            //console.log(loggedUser);
            form.reset();
            navigate(from, {replace:true})
        })
        .catch(e=>console.log(e))
    }
    return (
        <div className='d-flex justify-content-center p-5'>    
            <Form onSubmit={handleLogin} className='w-50'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group> 
                <Button variant="primary" type="submit">
                    Submit 
                </Button>
                <p><small>Are you new here? Please <Link to='/register'>Register</Link></small></p>
            </Form>
        </div>
    );
};

export default Login;