import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';
// import { response } from 'express';

function NameList() {

    const [users, setUsers] = useState({});
    const [singleUser] = useState({});

    useEffect(function () {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => setUsers(response.data))
            .then((error) => console.log(error));
    }, []);

    const onddlChange = (e) => {
        // alert(e.target.value);
        axios
        .get('https://jsonplaceholder.typicode.com/users' + e.target.value)
        .then((response) => singleUser(response.data))
        .then((error) => console.log(error));
    };

    return (
        <div>
        <select className="form-control col-md-3" onChange={onddlChange}>
            <option value="0">--Select User--</option>
            {users.map((user) => (
                <option key={user.id} value={user.id}>
                    {user.name}
                </option>
            ))}
        </select>
        <br /><br />
        <Table striped bordered hover></Table>
        <thead>
            <tr>Id</tr>
            <tr>Name</tr>
            <tr>Username</tr>
            <tr>Email</tr>
        </thead>
        <tbody>
          {
             <tr>
             <td>{singleUser.id}</td> 
             <td>{singleUser.name}</td>
             <td>{singleUser.Username}</td>
             <td>{singleUser.Email}</td>
             </tr>
          }  
        </tbody>
        </div>
        
    );
}

export default NameList
