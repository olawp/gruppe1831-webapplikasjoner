import React, { Component } from 'react'
import LoginForm from '../layout/LoginForm';

export class LoggInn extends Component {
    render() {
        return (
            <div>
                <header><h1>Logg inn</h1></header>
                <LoginForm />
            </div>
        )
    }
}

export default LoggInn
