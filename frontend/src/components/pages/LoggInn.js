/**
 * @author Robert Alexander Dankertsen
 * @author Ola Wethal Petersen
 * @desc Denne klassen er siden for å logge inn
 * @exports LoggInn
 */

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { Form, Input, Button } from '../../styled/style';
import { login } from '../../utils/authService.js';
import { useAuthContext } from '../../context/AuthProvider.jsx';

/**
 * @returns skriver ut logg inn skjema
 */
const LoggInn = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { setUser, isLoggedIn } = useAuthContext();
  const history = useHistory();
  const { state } = useLocation();

  function signUp() {
    window.location.href = 'http://localhost:3000/registrerdeg';
  }

  const { register, handleSubmit } = useForm({
    mode: 'onBlur',
  });

  useEffect(() => {
    if (isLoggedIn && state) {
      history.push(state.from.pathname);
    }
  }, [history, isLoggedIn, state]);

  /**
   * @function onSubmit sender data inn til databasen fra skjemaet
   * @param {*} credentials login informasjonen
   */
  const onSubmit = async (credentials) => {
    const { data } = await login(credentials);
    if (!data.success) {
      setError(data.message);
    } else {
      const user = data?.user;
      setUser({ ...user });
      setSuccess(true);
      history.push('/');
    }
  };

  return (
    <>
      <div>
        <header>
          <h1>Logg inn</h1>
        </header>
        <main>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">E-mail*:</label>
            <br />
            <Input
              type="email"
              id="email"
              name="email"
              ref={register({
                required: true,
              })}
            />
            <br />
            <label htmlFor="password">Passord*:</label>
            <br />
            <Input
              type="password"
              name="password"
              id="password"
              ref={register({
                required: true,
                minLength: 3,
              })}
            />
            <br />
            <Button type="submit">Logg inn</Button>
          </Form>
          <p>Har du ikke bruker?</p>
          <Button type="button" onClick={signUp}>
            Registrer Deg
          </Button>
        </main>
      </div>
    </>
  );
};

export default LoggInn;
