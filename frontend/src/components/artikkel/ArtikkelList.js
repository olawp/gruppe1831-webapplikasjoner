import React, { Component } from 'react'
import ArtikkelCard from '../artikkel/ArtikkelCard';

export class ArtikkelListe extends Component {
    render() {
        return this.props.artikkler.map((artikkel) => (
            <div>
                <ArtikkelCard key={artikkel._id} _id={artikkel._id} title={artikkel.title} category={artikkel.category} ingress={artikkel.ingress}/>
            </div>
        ))
    }
}

export default ArtikkelListe
