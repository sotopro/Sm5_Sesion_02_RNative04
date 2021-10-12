import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Preferences from './pages/preferences';
import Login from './pages/login';
import Todos from './pages/todos';
import useToken from './hooks/usetoken';
import { AppContainer } from './style'


const App = () => {

    const {token, setToken, clearToken} = useToken();
    const logoutUser = () => {
        return fetch("http://localhost:8080/logout", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })

        .then(data => {
            clearToken();
            return data.json();
        })
        .catch(err => console.log(err))
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await logoutUser();
        console.log(response);
    }
    if(!token){
        return <Login setToken={setToken} />
    }
    return (
        <AppContainer>
            <h1>Application</h1>
            <button onClick={(e) => handleSubmit(e)}>Logout</button>
            <BrowserRouter>
                <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/preferences" component={Preferences} />
                    <Route path="/todos" component={Todos} />
                </Switch>
            </BrowserRouter>
        </AppContainer>
    )
}

export default App;