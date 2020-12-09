/**
 * @author Robert Alexander Dankertsen
 * @author Ola Wethal Petersen
 * @desc Denne klassen er siden for å registrere seg. Ola forbedret error visning.
 * @exports SignUp
 */

/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { Form, Input, Button } from '../../styled/style';
import { signup } from '../../utils/signUpService.js';
import { useAuthContext } from '../../context/AuthProvider.jsx';

/**
 * @returns skriver ut registrerings skjema
 */
const SignUp = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { setUser, isLoggedIn } = useAuthContext();
  const history = useHistory();
  const { state } = useLocation();
  const [signupError, setSignupError] = useState(null);

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
   * @param {*} credentials registrering informasjonen
   * @const hasNumber regex som sjekker om passord har nummer
   * @const isEmail regex som sjekker om email er en epost
   * @const isName regex som sjekker om name er et navn
   */
  const onSubmit = async (credentials) => {
    if (
      document.getElementById('password').value !==
      document.getElementById('confirmPassword').value
    ) {
      setSignupError('Passordene stemmer ikke overens');
    } else {
      const { data } = await signup(credentials);
      if (!data.success) {
        setError(data.message);
        console.log(data.message);
      } else {
        setSuccess(true);
        alert('Du er nå registrert, vennligst logg inn');
        history.push('/');
      }
    }
  };

  return (
    <>
      <div>
        <header>
          <h1>Registrer Deg</h1>
        </header>
        <main>
          <div>
            {signupError && <p style={{ color: 'red' }}>{signupError}</p>}
            {error && (
              <div>
                {error.map((err) => (
                  <p style={{ color: 'red' }}>{err.message}</p>
                ))}
              </div>
            )}
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name*:</label>
            <br />
            <Input
              type="text"
              id="name"
              name="name"
              ref={register({
                required: true,
              })}
            />
            <br />
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
              })}
            />
            <br />
            <label htmlFor="confirmPassword">Bekreft Passord:</label>
            <br />
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
            />
            <br />
            <Button type="submit">Registrer Deg</Button>
          </Form>
        </main>
      </div>
    </>
  );
};

export default SignUp;
