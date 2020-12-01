import React, { Component } from 'react';

export class Hjem extends Component {
    render() {
        return (
            <div>
                <header><h1>Velkommen til FG Rørleggerservice AS</h1></header>
                <main className="hjem">
                    <a href="/kontorer" className="hjemKontorer"><section>Kontorer</section></a>
                    <a href="/kontakt" className="hjemKontakt"><section>Kontakt</section></a>
                    <a href="/fagartikler" className="hjemArtikkler"><section>Se våre fagartikler om oppussing av bad</section></a>
                </main>
            </div>
        )
    }
}

export default Hjem
