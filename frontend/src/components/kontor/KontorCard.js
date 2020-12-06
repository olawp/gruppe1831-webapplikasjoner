/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { KontorCardStyle } from '../../styled/style';

export class KontorCard extends Component {
  render() {
    const kort = [];

    for (let i = 0; i < this.props.info.antallKontorer; i++) {
      kort.push(
        <KontorCardStyle key={this.props.info.lokasjon + i}>
          <a
            href={`/kontor/${this.props.info.lokasjon}/${this.props.info.officeNumbers[i]}`}
          >
            <h4>Rørlegger {this.props.info.officeNumbers[i]}</h4>
            <p>Rørleggerveien {this.props.info.officeNumbers[i]}</p>
            <p>69 99 00 00</p>
            <p>
              {this.props.info.lokasjon}
              {this.props.info.officeNumbers[i]}@epost.no
            </p>
          </a>
        </KontorCardStyle>
      );
    }
    return <div className={this.props.info.class}>{kort}</div>;
  }
}

export default KontorCard;
