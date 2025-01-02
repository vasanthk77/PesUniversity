import React from "react";

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Pes",
            age: "50"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert("Name entered is: " + this.state.name);
        alert("Age entered is: " + this.state.age);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <label>Age:</label>
                <input
                    type="text"
                    value={this.state.age}
                    onChange={this.handleChange}
                    name="age"
                />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Demo;
