import React, { useEffect, useState } from 'react'
import {Form, Input, Button} from '../../styled/style';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { login } from '../../utils/authService.js';
import { useAuthContext } from '../../context/AuthProvider.jsx';

const LoggInn = () => {
    const [setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const { setUser, isLoggedIn } = useAuthContext();
    const history = useHistory();
    const { state } = useLocation();
  
    const { register,handleSubmit } = useForm({
      mode: "onBlur",
    });
  
    useEffect(() => {
      if (isLoggedIn && state) {
        history.push(state.from.pathname);
      }
    }, [history, isLoggedIn, state]);
  
    const onSubmit = async (credentials) => {
      const { data } = await login(credentials);
      if (!data.success) {
        setError(data.message);
      } else {
        const user = data?.user;
        setUser({ ...user});
        setSuccess(true);
        history.push("/");
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
              <label htmlFor="email">E-mail:</label>
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
              <label htmlFor="password">Password</label>
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
          </main>
        </div>
      </>
    );
  };
  
  export default LoggInn;
  