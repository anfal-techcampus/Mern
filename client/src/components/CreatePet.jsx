import React, { useState } from "react";
import {navigate, Link} from '@reach/router'
import axios from "axios";
import {Alert, Button, Container, Form} from 'react-bootstrap'


function CreatePet() {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState('');
    const [skillTwo, setSkillTwo] = useState('');
    const [skillThree, setSkillThree] = useState('');
    const [errors, setErrors] = useState([]);
    const [nameError, setNameError] = useState("");
    const [typeError, setTypeError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");


    const handleForm= e=>{
        e.preventDefault();
        if (name.length <3){
            return setNameError("Name should be at least 3 characters")
        }
        if (type.length <3){
            return setTypeError("Type should be at least 3 characters")
        }
        if (description.length <3){
            return setDescriptionError("Description should be at least 3 characters")
        }
        axios.post("http://localhost:8000/api/new/pet",{name,type,description,skillOne,skillTwo,skillThree})
            .then(res=> navigate('/'))
            .catch(err=>{ 
                    const errorResponse =  err.response.data;
                    const errorArr = []; 
                    for (const key of Object.keys(errorResponse)) { 
                        errorArr.push(errorResponse[key].message)
                    }
                    setErrors(errorArr);})
        }            
    return (
        <Container style={{border: '1px solid gray', padding:'20px'}}> 
            <h1>Pet Shelter</h1>
            <Link to= "/">back to home</Link>
            <h3>Know a pet needing a home?</h3>
            <div style={{border: '1px solid black', padding:'10px'}}>
            {errors.length>0&&<Alert variant='danger'>{errors.map((err, index) => <p key={index}>{err}</p>)}</Alert> }
            <Form onSubmit={handleForm}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Pet Name: </Form.Label>
                    <Form.Control type="text" onChange={e=> setName(e.target.value)} />
                    <Form.Text className="text-danger">{nameError? nameError: ""}</Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Pet Type: </Form.Label>
                    <Form.Control type="text" onChange={e=> setType(e.target.value)} />
                    <Form.Text className="text-danger">{typeError? typeError: ""}</Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Pet Description: </Form.Label>
                    <Form.Control type="text" onChange={e=> setDescription(e.target.value)} />
                    <Form.Text className="text-danger">{descriptionError? descriptionError: ""}</Form.Text>
                </Form.Group>

                <h4>Skills (optional):</h4>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Skill 1: </Form.Label>
                    <Form.Control type="text" onChange={e=> setSkillOne(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Skill 2: </Form.Label>
                    <Form.Control type="text" onChange={e=> setSkillTwo(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Skill 3: </Form.Label>
                    <Form.Control type="text" onChange={e=> setSkillThree(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">Add Pet</Button>
            </Form>
            </div>
        </Container>
    )
}

export default CreatePet
