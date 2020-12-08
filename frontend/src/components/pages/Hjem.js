/**
 * @author Robert Alexander Dankertsen
 * @desc Denne klassen er hovedsiden
 * @exports Fagartikler
 */

/* eslint-disable no-unused-vars */
import React from 'react';
import { Section } from '../../styled/style';

const Hjem = () => (
  <div>
    <header>
      <h1>Velkommen til FG Rørleggerservice AS</h1>
    </header>
    <main className="hjem">
      <a href="/kontorer" className="hjemKontorer">
        <Section>Kontorer</Section>
      </a>
      <a href="/kontakt" className="hjemKontakt">
        <Section>Kontakt</Section>
      </a>
      <a href="/fagartikler" className="hjemArtikkler">
        <Section>Se våre fagartikler om oppussing av bad</Section>
      </a>
    </main>
  </div>
);

export default Hjem;
