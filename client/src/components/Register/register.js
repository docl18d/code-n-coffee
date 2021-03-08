import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Register extends Component {

    constructor (){
        super()
        this.state={
            name:'',
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
        var name = this.state.name
        var email = this.state.email
        var password = this.state.password

        axios.post('/api/users', { name, email, password }) 
        .then((response)=>{
            this.props.history.push('/addfido')
        })

    }


    render() {
        console.log(this.state)
        return (
            <>
            <form>
                <input type="text" name="name" placeholder="john doe" onChange={this.handleInput} />
                <input type="text" name="email" placeholder="email@email.com" onChange={this.handleInput} />
                <input type="text" name="password" placeholder="password" onChange={this.handleInput} />
            </form>

            <button onClick={this.registerUser}>Register</button>
            </>

        )
    }
}

export default Register;