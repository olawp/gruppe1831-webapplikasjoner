/**
 * @author Robert Alexander Dankertsen
 * @desc Denne klassen er siden for å opprette en ny artikkel
 * @exports NyArtikkel
 */

/* eslint-disable no-unused-vars */
import React from 'react';
import NyArtikkelForm from '../artikkel/NyArtikkelForm';

const NyArtikkel = () => (
  <div>
    <header>
      <h1>Ny artikkel</h1>
    </header>
    <main>
      <NyArtikkelForm />
    </main>
  </div>
);

export default NyArtikkel;
