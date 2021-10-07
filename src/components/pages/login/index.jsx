import React, {useState} from "react";
import PropTypes from "prop-types";
import { LoginContainer } from "./style";
const Login = ({setToken}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = (credentials) => {
        return fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })

        .then(data => data.json())
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const token = await loginUser({username, password});
        setToken(token);
    }
    return (
        <LoginContainer>
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
            <label>
                <p>Username</p>
                <input type="text" name="username" onChange={e => setUsername(e.target.value)} value={username}/>
            </label>
            <label>
                <p>Password</p>
                <input type="password" name="password" onChange={e => setPassword(e.target.value)} value={password}/>
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
        </LoginContainer>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;