import React, { Component } from 'react';
import './index.css';
class Instruction extends Component {
    render(){
        return (
            <div className="instruction-container">
                <p className="instruction">{this.props.text}</p>
            </div>
        )
    }
}

export default Instruction;