import React, { useState } from 'react';
import './index.css';

const FileNamer = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState(false);

    const validate = (event) => {
        if(/\*/.test(name)) {
            event.preventDefault();
            setMessage(true);
            return;
        }
        setMessage(false);
    }
    return (
        <div className="wrapper">
            <div className="preview">
                {name && (<h2>Preview: {name}.js</h2>)}
            <form>
                <label>
                    <p>Name</p>
                    <input 
                        type="text" name="name"
                        autoComplete="off" 
                        onChange={event => setName(event.target.value)}
                        onFocus={() => setMessage(true)}
                        onBlur={() => setMessage(false)}
                        />
                </label>
                {message && (
                    <div>
                        <span role="img" aria-label="allowed">✅</span> Alphanumeric characters
                        <br />
                        <span role="img" aria-label="not allowed">⛔️</span> No asterisk (*)
                    </div>
                )}
                <div className="button-container">
                    <button onClick={validate}>Save</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default FileNamer;