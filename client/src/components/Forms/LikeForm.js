// Owners Fido List Added

import axios from 'axios';
import React from 'react';

import "./LikeForm.css";


export default class LikeForm extends React.Component {
    state = {
        id: "",
        Fido_Name: "",
        Breed: "",
        Sex: "",
        Age: "",
        City: "",
        Park: "",
        Owners_Preferred_Drink: ""
    };

    change = e => {
        // this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        });

    };

    onSubmit = e => {
        e.preventDefault();

        var Fido_name = this.state.Fido_name
        var Breed = this.state.Breed
        var Sex = this.state.Sex
        var Age = this.state.Age
        var City = this.state.City
        var Park = this.state.Park
        var Owners_Preferred_Drink = this.state.Owners_Preferred_Drink

        axios.post("/api/fidos", { Fido_name, Breed, Sex, Age, City, Park, Owners_Preferred_Drink })
            .then((response) => {
                // SWAP OUT THIS STRING

                this.props.history.push('/list')

            })
    };

    render() {
        console.log(this.state)
        return (
            <div class="card" style={{ width: "25rem" }}>
                <form className="form-card">
                    <h3>Add Fido</h3>
                    <div className="form-group">
                        <input className="form-control"
                            name="Fido_Name"
                            placeholder='Fido Name'
                            value={this.state.Fido_name}
                            onChange={e => this.change(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input className="form-control"
                            name="Breed"
                            placeholder='Breed'
                            value={this.state.Breed}
                            onChange={e => this.change(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input className="form-control"
                            name="Sex"
                            placeholder='Sex'
                            value={this.state.Sex}
                            onChange={e => this.change(e)}
                        />
                    </div>

                    <div className="form-group">
                        <input className="form-control"
                            name="Age"
                            placeholder='Age'
                            value={this.state.Age}
                            onChange={e => this.change(e)}
                        />
                    </div>

                    <div className="form-group">
                        <input className="form-control"
                            name="City"
                            placeholder='City'
                            value={this.state.City}
                            onChange={e => this.change(e)}
                        />
                    </div>

                    <div className="form-group">
                        <input className="form-control"
                            name="Park"
                            placeholder='Park'
                            value={this.state.Park}
                            onChange={e => this.change(e)}
                        />
                    </div>

                    <div className="form-group">
                        <input className="form-control"
                            name="Owners_Preferred_Drink"
                            placeholder='Owners Preferred Drink'
                            onChange={e => this.change(e)}
                        />
                    </div>
                    <button onClick={e => this.onSubmit(e)} className="btn btn-dark btn-lg btn-block">Submit</button>
                </form >
            </div>
        )
    }
}
