import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, navigate} from '@reach/router'
import {Button, Container} from 'react-bootstrap'


function PetDetails({id}) {
    const [pet, setPet]= useState({})

    useEffect(()=>{
        axios.get('http://localhost:8000/api/'+id) 
        .then(res => {
            console.log(res.data)
            setPet(res.data.pet);
            })
        .catch(err => console.log(err));
        },[id])

    const deletePet= ()=> {
        axios.delete('http://localhost:8000/api/'+id+'/delete') 
        .then(res => {console.log(res.data)
            navigate('/') })
        .catch(err => console.log(err));
    }    
    return (
        <Container style={{padding:'20px'}}>
            <h1>Pet Shelter</h1>
            <Link to= "/">back to home</Link>
            <h3>Details About: {pet.name} </h3>
            <Button variant="danger" type="submit" onClick={deletePet}>Adopt {pet.name}</Button> 

            <div style={{border: '1px solid black', padding:'10px', marginTop:'20px'}}>
                <h4>Pet type:</h4> <p>{pet.type}</p> 
                <h4>Description:</h4> <p>{pet.description}</p> 
                <h4>Skills:</h4>
                    <ul>
                        <li>{pet.skillOne}</li>
                        <li>{pet.skillTwo}</li>
                        <li>{pet.skillThree}</li>
                    </ul>

                <Button variant="success" type="submit">Like {pet.name}</Button>
            </div>
        </Container>
    )
}

export default PetDetails