import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
export default class ListComponent extends Component {
  render() {

    return (<div class="card" style={{ width: "25rem" }}>
    <form className="form-card">
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

        <Link to="/browse"></Link><button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
        <p className="forgot-password text-right">
            <a href="#"> Forgot password?</a>
        </p>
    </form>
</div>
);
}
}