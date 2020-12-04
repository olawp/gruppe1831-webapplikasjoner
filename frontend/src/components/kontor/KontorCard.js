import React, { Component } from 'react'
import {KontorCardStyle} from '../../styled/style';

export class KontorCard extends Component {
    render() {
        const kort = [];

        for(let i = 1; i <= this.props.antallKontorer; i++){
            kort.push(
                <KontorCardStyle>
                    <a href={"/kontor/" + this.props.lokasjon + "/" + i}>
                        <h4>Rørlegger {i}</h4>
                        <p>Rørleggerveien {i}</p>
                        <p>69 99 00 00</p>
                        <p>{this.props.lokasjon}{i}@epost.no</p>
                    </a>
                </KontorCardStyle>
            )
        }
        return(
            <div className={this.props.klasse}>
                {kort}
            </div>
        )
    }
}

export default KontorCard
