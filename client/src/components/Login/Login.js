import axios from "axios";
import React, { Component } from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleInput = (e) => {
        // console.log({[e.target.name]: e.target.value});
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    loginUser = () => {
        var email = this.state.email
        var password = this.state.password
        axios.post('/api/user/login', { email, password })
            .then((response) => {
                const result = JSON.parse(response.config.data)
                console.log(result);
                // this.props.history.push('/addlist')
                if ((email === result.email) && (password === result.password)) {
                    localStorage.setItem("user", JSON.stringify(result))
                }
            })
    }
    render() {

        return (
            <div class="card" style={{ width: "25rem" }}>
                <form className="form-card">
                    <h3>Log In</h3>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" onChange={this.handleInput} className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" onChange={this.handleInput} className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>


                    {/* <Link to="/browse"> */}
                        <button type="button" onClick={this.loginUser}
                        className="btn btn-dark btn-lg btn-block">Sign in</button>
                    {/* </Link> */} 
                    <p className="forgot-password">
                        <a href="#"> Forgot password?</a>

                    </p>
                    <Link to="/register">Don't have an account? Click Here!</Link>
                </form>
            </div>
        );
    }
}