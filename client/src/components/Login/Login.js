import React, { Component } from "react";
import "./login.css";
import { Link } from "react-router-dom";



export default class Login extends Component {
    render() {

        return (
            <div class="card" style={{ width: "25rem" }}>
                <form className="form-card">
                    <h3>Log In</h3>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <Link to="/browse"><button type="submit" className="btn btn-dark btn-lg btn-block">Sign In</button></Link>
                    <p className="forgot-password text-right">
                        <a href="#"> Forgot Password?</a>
                    </p>
                </form>
            </div>
        );
    }
}