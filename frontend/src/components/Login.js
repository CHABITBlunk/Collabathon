import React from 'react'
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import axios from 'axios';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3001/users/login', {email, password});
            console.log(response);
            localStorage.setItem('userId', response.data.user.id);
            props.setUser(response);
        } catch (error) {
            alert('Bad request; try again');
        }
    }

    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose} onEscapeKeyDown={props.onHide}>
                <Modal.Header onClick={()=>{props.onHide()}} closeButton>
                <Modal.Title>Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => {e.preventDefault(); handleLogin()}}>
                        <Form.Group className="mb-3" id="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => {setEmail(e.target.value)}} />
                        </Form.Group>
                        <Form.Group className="mb-3" id="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" onChange={(e) => {setPassword(e.target.value)}} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={()=>{props.onHide()}}>
                           Log In 
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Login
