import React from 'react';
import emoji from '../../../data/emoji.svg'
import './index.css'

const Instruction = ({text}) => {
    return (
        <div className="instruction-container">
            <img alt="laughing crying emoji" src={emoji} />
            <p className="instruction">{text}</p>
        </div>
    )
}

export default Instruction;