import React, { Component } from 'react'
import {KontorListStyle} from '../../styled/style';

export class KontorListe extends Component {
    render() {
        const liste = [];

        for(let i = 1; i <= this.props.antallKontorer; i++){
            liste.push(
                <KontorListStyle key={this.props.lokasjon + i}>
                    <a href={"/kontor/" + this.props.lokasjon + "/" + i}>
                        <p className="kontorNummer">{i}</p>
                        <h4 className="kontorListeTittel"> Rørlegger {i}</h4>
                        <p className="kontorInfo">Rørleggerveien {i}</p>
                        <p className="kontorInfo">69 99 00 00</p>
                        <p className="kontorInfo">{this.props.lokasjon}{i}@epost.no</p>
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
