import React from "react";

class Range extends React.Component {
    state = {
        value: "60"
    }
    range = (event) => {
        this.setState({value: event.target.value});
    }
    render() {
        return (
            <div>
                <hr />
                <h2>Range</h2>
                <input type="range" value= {this.state.value} onChange={this.range} />
                <p>{this.state.value}</p>
                <hr />
            </div>
        );
    }
}
export default Range; 