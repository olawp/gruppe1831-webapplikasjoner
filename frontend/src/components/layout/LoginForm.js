import React, { useEffect, useState } from 'react';
import { login } from '../../utils/authService.js';
import { useAuthContext } from '../../context/AuthProvider.jsx';


const LoginForm = () => {
    const [closeBtnState, setCloseBtnState] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const { setUser, isLoggedIn } = useAuthContext();


    const onSubmit = async (credentials) => {
        const { data } = await login(credentials);
        if (!data.success) {
            setCloseBtnState(true);
            setError(data.message);
        } else {
            const user = data?.user;
            const expire = JSON.parse(window.atob(data.token.split('.')[1])).exp;
            setUser({ ...user, expire });
            setSuccess(true);
        }
    };

    return (
            <form onSubmit={onSubmit}>
                <label>Din E-post*:</label>
                <br />
                <input type="email" placeholder="email" name="email" id="email" ></input>
                <br />
                <label>Passord:</label>
                <br />
                <input type="password" name="password" id="password" placeholder="password"></input>
                <br />
                <button type="submit">Login</button>
            </form>
    )
};

export default LoginForm;