import React, { Component } from 'react'
import {KontorCardStyle} from '../../styled/style';

export class KontorCard extends Component {
    render() {
        return (
            <div>
                <KontorCardStyle>
                    <a href="/kontor">
                        <h4>Rørlegger `$nummer`</h4>
                        <p>Rørleggerveien `$nummer`</p>
                        <p>69 99 00 00</p>
                        <p>`$lokasjon``$nummer`@epost.no</p>
                    </a>
                </KontorCardStyle>
            </div>
        )
    }
}

export default KontorCard
