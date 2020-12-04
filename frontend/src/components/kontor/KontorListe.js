import React, { Component } from 'react'
import {KontorListStyle} from '../../styled/style';

export class KontorListe extends Component {
    render() {
        const liste = [];

        for(let i = 0; i < this.props.info.antallKontorer; i++){
            liste.push(
                <KontorListStyle key={this.props.info.lokasjon + i}>
                    <a href={"/kontor/" + this.props.info.lokasjon + "/" + this.props.info.officeNumbers[i]}>
                        <p className="kontorNummer">{i+1}</p>
                        <h4 className="kontorListeTittel"> Rørlegger {this.props.info.officeNumbers[i]}</h4>
                        <p className="kontorInfo">Rørleggerveien {this.props.info.officeNumbers[i]}</p>
                        <p className="kontorInfo">69 99 00 00</p>
                        <p className="kontorInfo">{this.props.info.lokasjon}{this.props.info.officeNumbers[i]}@epost.no</p>
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
