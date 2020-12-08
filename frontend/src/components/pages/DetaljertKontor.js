/**
 * @author Robert Alexander Dankertsen
 * @desc Denne klassen er siden som viser en detaljert versjon av kontorene
 * @const lokasjon henter plasseringen til kontoret basert på URL'en
 * @const nummer henter nummeret til kontoret basert på URL'en
 * @exports DetaljertKontor
 */

/* eslint-disable no-undef */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import AnsattCard from '../ansatt/AnsattCard';

const lokasjon = window.location.href.split('/')[4];
const nummer = window.location.href.split('/')[5];
let antallAnsatte = 0;
let ansattDiv = '';

/**
 * @returns Skriver ut kontoret's informasjon
 */
export class DetaljertKontor extends Component {
  render() {
    /**
     * @desc sjekker lokasjonen til kontoret for å gi antall ansatte
     */
    if (lokasjon === 'fredrikstad') {
      antallAnsatte = 6;
      ansattDiv = 'ansattDiv';
    } else if (lokasjon === 'sarpsborg') {
      antallAnsatte = 12;
      ansattDiv = 'ansattDivTo';
    } else if (lokasjon === 'moss') {
      antallAnsatte = 5;
      ansattDiv = 'ansattDiv';
    } else {
      antallAnsatte = 7;
      ansattDiv = 'ansattDiv';
    }

    return (
      <div>
        <header>
          <h1>Kontor Rørlegger {nummer}</h1>
        </header>
        <main>
          <h2 style={{ textAlign: 'left' }}>
            Velkommen til Rørlegger {nummer}
          </h2>
          <p style={{ textAlign: 'left' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h2 style={{ textAlign: 'left' }}>Våre ansatte</h2>
          <div className={ansattDiv}>
            <AnsattCard antall={antallAnsatte}></AnsattCard>
          </div>
          <section>
            <h1>Kontakt oss på 69 99 00 00</h1>
          </section>
        </main>
      </div>
    );
  }
}

export default DetaljertKontor;
