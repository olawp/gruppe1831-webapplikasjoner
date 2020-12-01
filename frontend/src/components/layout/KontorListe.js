import React, { Component } from 'react'
import {KontorListStyle} from '../../styled/style';

export class KontorListe extends Component {
    render() {
        const liste = [];

        for(let i = 1; i <= this.props.antallKontorer; i++){
            liste.push(
                <KontorListStyle>
                    <a href="/kontor">
                        <p>{i}</p>
                        <h4> Rørlegger {i}</h4>
                        <p> Rørleggerveien {i} 69 99 00 00 {this.props.lokasjon}{i}@epost.no</p>
                    </a>
                </KontorListStyle>
            )
        }

        return (
            <div className="kontorListe">
                {liste}
            </div>
        )
    }
}

export default KontorListe
