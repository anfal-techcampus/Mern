import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "@reach/router";


function Pet() {
    const [allPets, setAllPets] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api")
        .then((res) => {
        console.log(res.data)
        setAllPets(res.data.pets);
        })
        .catch((err) => console.log(err));
    }, []);
    return (
        <Container style={{border: '1px solid gray', padding:'20px'}} > 
        <h1>Pet Shelter</h1>
        <Link to= "/pets/new">add a pet to the shelter</Link>
        <h3>These pets are looking for a good home</h3>
            <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name </th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {allPets.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.type}</td>
                        <td>
                            <Link to={`/pets/${item._id}`}>Details</Link> | <Link to={`/pets/${item._id}/edit`}>Edit</Link>
                        </td>
                    </tr>
                ))} 
                </tbody>
            </Table>
            </div>
        </Container>
    )
}

export default Pet

