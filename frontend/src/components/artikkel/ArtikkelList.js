/**
 * @author Robert Alexander Dankertsen
 * @desc Denne klassen skriver ut en liste med alle artikklene
 * @exports ArtikkelListe
 */

/* eslint-disable import/no-useless-path-segments */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import ArtikkelCard from '../artikkel/ArtikkelCard';

/**
 * @desc Map'er ut alle artikklene og viderefører all informasjonen til nåværende arikkel til ArtikkelCard
 * @returns ArtikkelCard med informasjonen til artikkelen
 */
export class ArtikkelListe extends Component {
  render() {
    return this.props.artikkler.map((artikkel) => (
      <ArtikkelCard
        key={artikkel._id}
        _id={artikkel._id}
        title={artikkel.title}
        category={artikkel.category.category}
        ingress={artikkel.ingress}
        isHidden={artikkel.hidden}
      />
    ));
  }
}

export default ArtikkelListe;
