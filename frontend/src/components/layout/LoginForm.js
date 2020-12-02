import React, { useEffect, useState } from 'react';
import { login } from '../../utils/authService.js';
import { useAuthContext } from '../../context/AuthProvider.jsx';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';

const LoginForm = () => {
    const [closeBtnState, setCloseBtnState] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const { setUser, isLoggedIn } = useAuthContext();
    const history = useHistory();
    const { state } = useLocation();

    const { register, errors, handleSubmit, formState } = useForm({
        mode: 'onBlur',
    });

    useEffect(() => {
        if (isLoggedIn && state) {
            history.push(state?.from.pathname);
        }
    }, [history, isLoggedIn, state]);

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
            history.push('/');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <input id="email"
                placeholder="Epost"
                name="email"
                type="email"
                ref={register({
                    required: true,
                })}></input>
            <label htmlFor="password"></label>
            <input
            type="password"
            name="password"
            id="password"
            placeholder="Passord"
            ref={register({
              required: true,
              minLength: 3,
            })}></input>
            <input type="submit"></input>
        </form>
    )
}

export default LoginForm;