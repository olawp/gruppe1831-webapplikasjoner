import React, { Component } from 'react'
import {Form, Input, Button} from '../../styled/style';

export class Kontakt extends Component {
    render() {
        return (
            <div>
                <header><h1>Kontakt oss</h1></header>
                <main>
                    <Form>
                        <label>
                            Din E-post*:
                        </label>
                        <br/>
                        <Input type="email"></Input>
                        <br/>
                        <label>
                            Ditt telefonnummer:
                        </label>
                        <br/>
                        <Input type="tel"></Input>
                        <br/>
                        <label>
                            Ditt spørsmål*:
                        </label>
                        <br/>
                        <Input type="text"></Input>
                        <br/>
                        <Button type="submit">Send</Button>
                    </Form>
                    <p>* = påkrevd</p>
                </main>
            </div>
        )
    }
}

export default Kontakt
