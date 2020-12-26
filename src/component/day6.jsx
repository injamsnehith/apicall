import React, { Component } from 'react'
import './style.css';
import Childcomponent from "./child_component"

export default class day6 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDisabled: false
            ,child_style: {
                backgroundColor : "White"
               }
        }
        
    }

    handleSubmitClicked() {
        this.setState({
            isDisabled: true
        });

        setTimeout(
            function () {
                this.enableComponents()
            }.bind(this),
            3000
        );
    }

    enableComponents() {
        this.setState({
            isDisabled: false
        });
    }

    render() {
        return (
            <div className="day6">
                <h1>Day7 Assignment</h1>
                <br />
                <br />
                <input type="text" onChange={(e)=>{
                    let child_style=this.state.child_style
                    child_style["backgroundColor"]=e.target.value
                    this.setState({child_style:child_style},console.log(this.state1))
                }} disabled={this.state.isDisabled} />
                <br />
                <br />
                <button disabled={this.state.isDisabled} onClick={this.handleSubmitClicked.bind(this) }>
                    Submit
                 </button>

                 <p>Current color: {this.state.child_style && this.state.child_style.backgroundColor?this.state.child_style.backgroundColor:""}</p>
                <br />

                
                <Childcomponent child_style={this.state.child_style}/>
            </div>
        );
    }
}