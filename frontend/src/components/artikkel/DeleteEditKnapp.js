/**
 * @author Robert Alexander Dankertsen
 * @desc Denne klassen skriver modalen for slette eller redigere artikkler
 * @exports DeleteEditKnapp
 */

/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useAuthContext } from '../../context/AuthProvider';
import { SlettKnapp, RedigerKnapp } from '../../styled/style';

/**
 * @param {*} props er forelder's funksjoner (her: Artikkel.js)
 * @const isLoggedIn refererer til AuthProvider.js for en beskrivelse
 * @const isAdmin refererer til AuthProvider.js for en beskrivelse
 * @returns Skriver ut slett og rediger knappene
 */
const DeleteEditKnapp = (props) => {
  const { isLoggedIn, isAdmin } = useAuthContext();
  return (
    <div>
      {isLoggedIn && isAdmin && (
        <div>
          <SlettKnapp type="button" onClick={props.delete}>
            SLETT
          </SlettKnapp>
          <RedigerKnapp type="button" onClick={props.edit}>
            REDIGER
          </RedigerKnapp>
        </div>
      )}
    </div>
  );
};

export default DeleteEditKnapp;
