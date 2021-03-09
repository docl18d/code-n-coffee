import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./register.css";

class Register extends Component {

    constructor() {
        super()
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            password:''
        }
    }

    handleInput = (e) => {
        // console.log({[e.target.name]: e.target.value});
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    registerUser=()=> {
        var firstName = this.state.firstName
        var lastName = this.state.lastName
        var email = this.state.email
        var password = this.state.password

console.log({ firstName, lastName, email, password });
        axios.post('/api/user', { firstName, lastName, email, password }) 

        .then((response)=>{
            console.log(response);
            this.props.history.push('/addfido')
        })
    }


    render() {
        // console.log(this.state)
        return (
            <div className="card" style={{ width: "25rem" }}>
                <form className="form-card">
                    <h3>Register</h3>
                    <div className="form-group">
                        <input className="form-control" type="text" name="firstName" placeholder="First" onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="lastName" placeholder="Last" onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="email" placeholder="Email@email.com" onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="password" placeholder="Password" onChange={this.handleInput} />
                    </div>
                    <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.registerUser}>Register Now</button>
                </form>
            </div>
        )
    }
}

export default Register;