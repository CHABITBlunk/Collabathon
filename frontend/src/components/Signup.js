import React from 'react'
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import axios from 'axios';

const Signup = (props) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            const response = await axios.post('http://localhost:3001/users/signup', {email, firstName, lastName, password});
            console.log(response);
            localStorage.setItem('userId', response.data.user.id);
            props.setUser(response);
        } catch (error) {
            alert('Bad request; try again');
        }
    }

    return (
        <div>
            <Modal show={props.show} onHide={props.onHide} onEscapeKeyDown={props.onHide}>
                <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => {e.preventDefault(); handleSignup()}}>
                        <Form.Group className="mb-3" id="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => {setEmail(e.target.value)}} />
                        </Form.Group>
                        <Form.Group className="mb-3" id="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter first name" onChange={(e) => {setFirstName(e.target.value)}} />
                        </Form.Group>
                        <Form.Group className="mb-3" id="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter last name" onChange={(e) => {setLastName(e.target.value)}} />
                        </Form.Group>
                        <Form.Group className="mb-3" id="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" onChange={(e) => {setPassword(e.target.value)}} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={()=>{props.onHide()}}>
                          Sign Up 
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Signup
