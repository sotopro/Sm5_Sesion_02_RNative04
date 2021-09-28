import React, { useState, useEffect } from 'react';
import './index.css';

const FileNamer = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);

    useEffect(() => {
        const handleWindowClick = () => {
            setMessage(false);
            setIsEmpty(false);
        }
        if(message || isEmpty) {
            window.addEventListener('click', handleWindowClick);
        } else {
            window.removeEventListener('click', handleWindowClick);
        }

        return () => window.removeEventListener('click', handleWindowClick);
    }, [message,setMessage, setIsEmpty, isEmpty]);

    const validate = (event) => {
        event.preventDefault();
        if(event.target.value.length === 0) {
            setIsEmpty(true);
            return;
        } else {
            if(/\*/.test(name)) {
                setMessage(true);
                return;
            }
            setMessage(false);
        }
    }

    const handleChange = (event) => {
        setName(event.target.value);
        setIsEmpty(event.target.value.length === 0);
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
                        onChange={event => handleChange(event)}
                        />
                </label>
                <div className="information-wrapper">
                    <button 
                        type="button"
                        className="information"
                        onClick={() => setMessage(true)}
                    >
                        more information
                    </button>
                </div>
                {(message || isEmpty) && (
                    <div className="popup">
                        <span role="img" aria-label="allowed">✅</span> Alphanumeric characters
                        <br />
                        <span role="img" aria-label="not allowed">⛔️</span> No asterisk (*)
                    </div>
                )}
                {isEmpty && (
                    <div className="popup">
                    <span role="img" aria-label="required">⛔️</span> field required
                </div>
                )}
                <div className="button-container">
                    <button type="submit" onClick={validate} className="save">Save</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default FileNamer;