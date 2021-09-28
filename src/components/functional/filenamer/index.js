import React from 'react';
import './index.css';

const FileNamer = () => {
    return (
        <div className="wrapper">
            <div className="preview">
                <h2>Preview:</h2>
            <form>
                <label>
                    <p>Name</p>
                    <input type="text" name="name" />
                </label>
                <div className="button-container">
                    <button>Save</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default FileNamer;