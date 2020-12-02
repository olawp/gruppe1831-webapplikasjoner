import React, { Component } from 'react'
import {Form, Input, Button} from '../../styled/style';

export class LoggInn extends Component {
    render() {
        return (
            <div>
                <header><h1>Logg inn</h1></header>
                <main>
                    <Form>
                        <label>E-mail:</label>
                        <br/>
                        <Input type="email"></Input>
                        <br/>
                        <label>Password</label>
                        <br/>
                        <Input type="password"></Input>
                        <br/>
                        <Button>Logg inn</Button>
                    </Form>
                </main>
            </div>
        )
    }
}

export default LoggInn
