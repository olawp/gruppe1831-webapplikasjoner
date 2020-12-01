import React, { Component } from 'react'

export class KontorCard extends Component {
    render() {
        return (
            <div>
                <h4>Rørlegger ´$nummer´</h4>
                <p>Rørleggerveien ´$nummer´</p>
                <p>69 99 00 00</p>
                <p>´$lokasjon´´$nummer´@epost.no</p>
            </div>
        )
    }
}

export default KontorCard
