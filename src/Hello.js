import React from 'react';

class Hello extends React.Component 
{

    constructor(props)
    {
        super(props);
        this.state={
            text:"Hello from Class",
            btnText:"Перевести"
        }
    }
    translate=()=>{
        this.setState({text: this.state.text === "Привет из класса" ? "Hello from Class" : "Привет из класса"})
        this.setState({btnText: this.state.btnText === "Translate" ? "Перевести" : "Translate"});
    }
    render()
    {
        return(
                <div>
                    <h1>{this.state.text}</h1>
                    <button onClick={this.translate}>{this.state.btnText}</button>
                </div>
        );
    }

}
export default Hello;