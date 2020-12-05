/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Axios from 'axios';
import { Form, Input, Button } from '../../styled/style';

// TODO: Add check so that email is a valid mail
// TODO: Add check so that password is a minimum of 3 characters and one number
// TODO: Add check so that name field != empty

export class SignUp extends Component {
  submitClicked = () => {
    if (
      document.getElementById('password').value ===
      document.getElementById('passwordConfirm').value
    ) {
      Axios.post('http://localhost:5000/api/v1/users', {
        name: document.getElementById('name').value,
        email: document.getElementById('mail').value,
        password: document.getElementById('password').value,
      })
        .then(
          alert('Du er nå registrert'),
          (window.location.href = 'http://localhost:3000/logginn')
        )
        .catch((error) =>
          alert(`Kunne ikke opprette ny bruker.\nError: ${error}`)
        );
    } else {
      alert('Passordene stemmer ikke overens');
    }
  };

  render() {
    return (
      <div>
        <header>
          <h1>Registrer Deg</h1>
        </header>
        <main>
          <Form>
            <label>Ditt navn*:</label>
            <br />
            <Input type="text" id="name"></Input>
            <br />
            <label>Din E-post*:</label>
            <br />
            <Input type="email" id="mail"></Input>
            <br />
            <label>Ditt Passord*:</label>
            <br />
            <Input type="password" id="password"></Input>
            <br />
            <label>Bekreft Passord*:</label>
            <br />
            <Input type="password" id="passwordConfirm"></Input>
            <br />
            <Button type="button" onClick={this.submitClicked}>
              Send
            </Button>
          </Form>
          <p>* = påkrevd</p>
        </main>
      </div>
    );
  }
}

export default SignUp;
