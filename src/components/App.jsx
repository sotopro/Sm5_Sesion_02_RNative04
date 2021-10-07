import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Preferences from './pages/preferences';
import Login from './pages/login';


const App = () => {
    const [token, setToken] = useState('');

    if(!token){
        return <Login setToken={setToken} />
    }
    return (
        <div className="App">
            <h1>Application</h1>
            <BrowserRouter>
                <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/preferences" component={Preferences} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;