import React, { Component } from "react";
import "./login.css";


export default class Login extends Component {
    render() {
        const loginFormHandler = async (event) => {
            event.preventDefault();
          
            // Collect values from the login form
            const email = document.querySelector('#email-login').value.trim();
            const password = document.querySelector('#password-login').value.trim();
          
            if (email && password) {
              // Send a POST request to the API endpoint
              const response = await fetch('/api/user/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
              });
          
              if (response.ok) {
                // If successful, redirect the browser to the profile page
                document.location.replace('/browser');
              } else {
                alert(response.statusText);
              }
            }
          };
          
          document
            .querySelector('.login-form')
            .addEventListener('submit', loginFormHandler);

        return (
            <div class="card" style={{width: "25rem"}}>
            <form className= "form-card">
                <h3>Log in</h3>

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

                <button type="submit" className="btn btn-dark btn-lg btn-block" href="./homepage">Sign in</button>
                <p className="forgot-password text-right">
                    <a href="#"> Forgot password?</a>
                </p>
            </form>
            </div>
        );
    }
}