import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./register.css";

class Register extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    registerUser = () => {
        var name = this.state.name
        var email = this.state.email
        var password = this.state.password

        axios.post('/api/users', { name, email, password })
            .then((response) => {
                this.props.history.push('/addfido')
            })

    }


    render() {
        console.log(this.state)
        return (
            <div class="card" style={{ width: "25rem" }}>
                <form className="form-card">
                    <h3>Register</h3>
                    <div className="form-group"><input className="form-control" type="text" name="name" placeholder="John Doe" onChange={this.handleInput} /></div>
                    <div className="form-group"><input className="form-control" type="text" name="email" placeholder="Email@email.com" onChange={this.handleInput} /></div>
                    <div className="form-group"><input className="form-control" type="text" name="password" placeholder="Password" onChange={this.handleInput} /></div>
                    <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.registerUser}>Register Now</button>
                </form>

                
            </div>

        )
    }
}

export default Register;