/**
 * @author Robert Alexander Dankertsen
 * @desc Denne klassen skriver ut korta til ansatte ved kontorer
 * @exports AnsattCard
 */

// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

export class AnsattCard extends Component {
  render() {
    const kort = [];

    /**
     * @description Skriver ut kortene basert på antall ansatte som blir sendt med via props
     * @example Om this.props.antall er 3, vil den skrive ut kortene til tre ansatte
     * @returns Skriver ut kortene
     */
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.props.antall; i++) {
      kort.push(
        <div>
          <div>
            <p>IMAGE</p>
          </div>
          <p>Ansatt AnsattNavn</p>
          <p>Stilling</p>
        </div>
      );
    }
    return kort;
  }
}

export default AnsattCard;
