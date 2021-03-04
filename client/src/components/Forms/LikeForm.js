import React from 'react';


export default class ListForm extends React.Component {
    state = {
        id: "",
        Fido_Name: "",
        Breed: "",
        Sex: "",
        Age: "",
        City: "",
        Park: "",
        Owners_Preffered_Drink: ""
    };

    change = e => {
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        });

        onSubmit = e => {
            e.preventDefault();
            // this.props.onSubmit(this.state);
            this.setState({
                id: "",
                Fido_Name: "",
                Breed: "",
                Sex: "",
                Age: "",
                City: "",
                Park: "",
                Owners_Preffered_Drink: ""
            });
            this.props.onChange({
                id: "",
                Fido_Name: "",
                Breed: "",
                Sex: "",
                Age: "",
                City: "",
                Park: "",
                Owners_Preffered_Drink: ""
            });
        };

    };
    render() {
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
                    name="Owners_Preffered_Drink"
                    placeholder='Owners_Preffered_Drink'
                    value={this.state.Owners_Preffered_Drink}
                    onChange={e => this.setState(e)}
                />
                <br />
                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form >
        );
    }
}

