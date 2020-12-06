/* eslint-disable import/no-useless-path-segments */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import ArtikkelCard from '../artikkel/ArtikkelCard';

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
