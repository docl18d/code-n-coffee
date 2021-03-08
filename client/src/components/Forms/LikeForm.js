// Owners Fido List Added

import axios from 'axios';
import React from 'react';



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
        .then((response)=>{
        // SWAP OUT THIS STRING

            this.props.history.push('/list')

        })
    };

    render() {
        console.log(this.state)
        return (
            <form>
                <input
                    name="Fido_Name"
                    placeholder='Fido Name'
                    value={this.state.Fido_name}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    name="Breed"
                    placeholder='Breed'
                    value={this.state.Breed}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    name="Sex"
                    placeholder='Sex'
                    value={this.state.Sex}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    name="Age"
                    placeholder='Age'
                    value={this.state.Age}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    name="City"
                    placeholder='City'
                    value={this.state.City}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    name="Park"
                    placeholder='Park'
                    value={this.state.Park}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    name="Owners_Preferred_Drink"
                    placeholder='Owners_Preferred_Drink'
                    onChange={e => this.change(e)}
                />
                <br />
                <button onClick={e => this.onSubmit(e)}>Submit</button>

            </form >
        );
    }
}

