import React from "react";
class Browse extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            FidoList: [],

            AddFido: ""

        }

    };



    onValueChange = (e) => {

        const Fido = e.target.value;

        this.setState({ Fido })

    };



    removeItem = (props) => {

        this.setState({ FidoList: this.state.FidoList.splice(props, 1) })

        console.log(this.state.FidoList)

    };



    onSubmit = (e) => {

        e.preventDefault();

        const { FidoList, Fido } = this.state

        this.setState({ FidoList: [FidoList, Fido] })

        this.setState({ Fido: "" })

        console.log(this.state.FidoList)

    };



    render() {

        const myList = this.state.FidoList.map((Fido, index) => (

            <li key={index}>

                {Fido}

                <button onClick={() => this.removeItem(index)}>x</button>

            </li>

        ))

        return (

            <div>

                <form onSubmit={this.onSubmit}>

                    <input

                        type="text"

                        value={this.state.Fido}

                        onChange={this.onValueChange}

                        autoFocus

                        placeholder="Fido"

                    />

                </form>

                <ol>

                    {myList}

                </ol>

            </div>

        )

    };

};

export default Browse;