import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Register extends Component {

    constructor (){
        super()
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            password:''
        }
    }

    handleInput=(e)=>{
        this.setState({
        [e.target.name]: e.target.value
        })
    }

    registerUser=()=> {
        var firstName = this.state.firstName
        var lastName = this.state.lastName
        var email = this.state.email
        var password = this.state.password

        axios.post('/api/users', { firstName, lastName, email, password }) 
        .then((response)=>{
            this.props.history.push('/addfido')
        })

    }


    render() {
        console.log(this.state)
        return (
            <>
            <form>
                <input type="text" name="firstName" placeholder="john" onChange={this.handleInput} />
                <input type="text" name="lastName" placeholder="doe" onChange={this.handleInput} />
                <input type="text" name="email" placeholder="email@email.com" onChange={this.handleInput} />
                <input type="text" name="password" placeholder="password" onChange={this.handleInput} />
            </form>

            <button onClick={this.registerUser}>Register</button>
            </>

        )
    }
}

export default Register;