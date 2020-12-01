import React, { Component } from 'react'

export class Kontakt extends Component {
    render() {
        return (
            <div>
                <header><h1>Kontakt oss</h1></header>
                <main>
                    <form>
                        <label>
                            Din E-post*:
                        </label>
                        <br/>
                        <input type="email"></input>
                        <br/>
                        <label>
                            Ditt telefonnummer:
                        </label>
                        <br/>
                        <input type="tel"></input>
                        <br/>
                        <label>
                            Ditt spørsmål*:
                        </label>
                        <br/>
                        <input type="text"></input>
                        <br/>
                        <button type="submit">Send</button>
                    </form>
                    <p>* = påkrevd</p>
                </main>
            </div>
        )
    }
}

export default Kontakt
