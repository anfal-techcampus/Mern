import React, {useState, useEffect} from 'react'
import {navigate, Link} from '@reach/router'
import {Alert, Button, Container, Form} from 'react-bootstrap'
import axios from 'axios'

function UpdatePet({id}) {
    const [name, setName] = useState();
    const [type, setType] = useState();
    const [description, setDescription] = useState();
    const [skillOne, setSkillOne] = useState();
    const [skillTwo, setSkillTwo] = useState();
    const [skillThree, setSkillThree] = useState();
    const [errors, setErrors] = useState([]);
    const [nameError, setNameError] = useState("");
    const [typeError, setTypeError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");


    useEffect(()=>{
        axios.get('http://localhost:8000/api/'+id) 
        .then(res => {
            console.log(res.data)
            setName(res.data.pet.name)
            setType(res.data.pet.type)
            setDescription(res.data.pet.description)
            setSkillOne(res.data.pet.skillOne)
            setSkillTwo(res.data.pet.skillTwo)
            setSkillThree(res.data.pet.skillThree)
            
    })
    .catch(err => console.log(err));
    },[id])

    const handleForm= e=>{
        e.preventDefault()
        if (name.length <3){
            return setNameError("Name should be at least 3 characters")
        }
        if (type.length <3){
            return setTypeError("Type should be at least 3 characters")
        }
        if (description.length <3){
            return setDescriptionError("Description should be at least 3 characters")
        }
        axios.put('http://localhost:8000/api/'+id+'/edit', {name,type,description,skillOne,skillTwo,skillThree})
            .then(res=>{
                console.log(res.data)
                navigate('/')
            })
            .catch(err=>{ const errorResponse =  err.response.data
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
                console.log(errorArr)})
    }
    return (
        <Container style={{border: '1px solid gray', padding:'20px'}}> 
            <h1>Pet Shelter</h1>
            <Link to= "/">back to home</Link>
            <h3>Edit {name} </h3>
            <div style={{border: '1px solid black', padding:'10px'}}>
            

            {errors.length > 0 && <Alert variant='danger'>{errors.map((err, index) => <p key={index}>{err} hi</p>)}</Alert>}
            <Form onSubmit={handleForm}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Pet Name: </Form.Label>
                    <Form.Control type="text" value={name} onChange={e=> setName(e.target.value)} />
                    <Form.Text className="text-danger">{nameError? nameError: ""}</Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Pet Type: </Form.Label>
                    <Form.Control type="text" value={type} onChange={e=> setType(e.target.value)} />
                    <Form.Text className="text-danger">{typeError? typeError: ""}</Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Pet Description: </Form.Label>
                    <Form.Control type="text" value={description} onChange={e=> setDescription(e.target.value)} />
                    <Form.Text className="text-danger">{descriptionError? descriptionError: ""}</Form.Text>
                </Form.Group>

                <h4>Skills (optional):</h4>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Skill 1: </Form.Label>
                    <Form.Control type="text" value={skillOne} onChange={e=> setSkillOne(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Skill 2: </Form.Label>
                    <Form.Control type="text" value={skillTwo} onChange={e=> setSkillTwo(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Skill 3: </Form.Label>
                    <Form.Control type="text" value={skillThree} onChange={e=> setSkillThree(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">Edit Pet</Button>
            </Form>
            </div>
        </Container>
    )
}

export default UpdatePet
