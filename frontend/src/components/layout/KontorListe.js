import React, { Component } from 'react'
import {KontorListStyle} from '../../styled/style';

export class KontorListe extends Component {
    render() {
        return (
            <div>
                <KontorListStyle>
                    <a href="/kontor">
                        <p>´$nummer´ </p>
                        <h4> Rørlegger ´$nummer´ </h4>
                        <p> Rørleggerveien ´$nummer´ 69 99 00 00 ´$lokasjon´´$nummer´@epost.no</p>
                    </a>
                </KontorListStyle>
            </div>
        )
    }
}

export default KontorListe
