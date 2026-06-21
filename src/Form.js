import React from 'react';

class Form extends React.Component {
    state = {
        firstname: "",
        lastname: "",
        email: ""
    }
    update = (event) => 
        {
            this.setState({[event.target.name]: event.target.value})
        }
    render() {

        return (
            <div>
                <hr />
                <h2>Form</h2>
                <form>
                    <input value={this.state.firstname} name="firstname" onChange={this.update} />
                    <input value={this.state.lastname}  name="lastname" onChange={this.update} />
                    <input value={this.state.email}     name="email" onChange={this.update} />
                </form>
        <hr />
        <p>{this.state.firstname} {this.state.lastname} {this.state.email}</p>
    </div>
);
} 
}
export default Form;

