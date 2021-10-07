import { useState } from "react";

const useToken = () => {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token;
    }

    const savetoken = (userToken) => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token)
    }

    const clearToken = () => {
        sessionStorage.removeItem('token');
        setToken(null);
    }
    const [token, setToken] = useState(getToken());

    return {
        setToken: savetoken,
        token,
        clearToken
    }
}

export default useToken;