import React, { Component } from 'react'

export class KontorListe extends Component {
    render() {
        return (
            <div>
                <a href="/kontor">
                    <p>´$nummer´ </p>
                    <h4> Rørlegger ´$nummer´ </h4>
                    <p> Rørleggerveien ´$nummer´ 69 99 00 00 ´$lokasjon´´$nummer´@epost.no</p>
                </a>
            </div>
        )
    }
}

export default KontorListe
