import React, { Component } from 'react'
import AnsattCard from '../ansatt/AnsattCard';

//let lokasjon = window.location.href.split("/")[4];
let nummer= window.location.href.split("/")[5];

export class DetaljertKontor extends Component {
    render() {
        return (
            <div>
                <header><h1>Kontor Rørlegger {nummer}</h1></header>
                <main>
                    <h2 style={{textAlign: "left"}}>Velkommen til Rørlegger {nummer}</h2>
                    <p style={{textAlign: "left"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <h2 style={{textAlign: "left"}}>Våre ansatte</h2>
                    <div className="ansattDiv">
                        <AnsattCard></AnsattCard>
                        <AnsattCard></AnsattCard>
                        <AnsattCard></AnsattCard>
                        <AnsattCard></AnsattCard>
                        <AnsattCard></AnsattCard>
                        <AnsattCard></AnsattCard>
                        <AnsattCard></AnsattCard>
                        <AnsattCard></AnsattCard>
                        <AnsattCard></AnsattCard>
                        <AnsattCard></AnsattCard>
                        <AnsattCard></AnsattCard>
                        <AnsattCard></AnsattCard>
                        <AnsattCard></AnsattCard>
                        <AnsattCard></AnsattCard>
                    </div>
                    <section><h1>Kontakt oss på 69 99 00 00</h1></section>
                </main>
            </div>
        )
    }
}

export default DetaljertKontor
