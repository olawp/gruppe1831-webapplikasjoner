import React, { Component } from 'react'

export class Hjem extends Component {
    render() {
        return (
            <div>
                <header><h1>Velkommen til FG Rørleggerservice AS</h1></header>
                <main className="hjem">
                    <section className="hjemKontorer">Kontorer</section>
                    <section className="hjemKontakt">Kontakt</section>
                    <section className="hjemArtikkler">Se våre fagartikler om oppussing av bad</section>
                </main>
            </div>
        )
    }
}

export default Hjem
