/**
 * @author Robert Alexander Dankertsen
 * @desc Denne klassen er siden for å registrere seg
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
  const [/* error, */ setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { setUser, isLoggedIn } = useAuthContext();
  const history = useHistory();
  const { state } = useLocation();

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
   */
  const onSubmit = async (credentials) => {
    // eslint-disable-next-line no-constant-condition
    const hasNumber = new RegExp('/[0-9]/g');
    // eslint-disable-next-line no-invalid-regexp
    const isEmail = new RegExp(
      '[/ÆØÅæøå\\w-.]+@([ÆØÅæøå\\w-]+.)+[ÆØÅæøå\\w-]{2,6}'
    );
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    if (
      !hasNumber.test(password) &&
      password.replace(hasNumber, '').length === 3
    ) {
      alert('Passord må minst ha 3 bokstaver og ett tall');
    } else if (!isEmail.test(email)) {
      alert('Epost må være gyldig');
    } else if (
      document.getElementById('password').value ===
      document.getElementById('confirmPassword').value
    ) {
      const { data } = await signup(credentials);
      if (data.success) {
        setError(data.message);
      } else {
        setSuccess(true);
        alert('Du er nå registrert, vennligst logg inn');
        history.push('/');
      }
    } else {
      alert('Passordene stemmer ikke overens');
    }
  };

  return (
    <>
      <div>
        <header>
          <h1>Registrer Deg</h1>
        </header>
        <main>
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
                minLength: 3,
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
