import React from 'react';

const Instruction = ({text}) => {
    return (
        <div className="instruction-container">
            <p className="instruction">{text}</p>
        </div>
    )
}

export default Instruction;