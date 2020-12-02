import React, { Component } from 'react'
import ArtikkelCard from '../artikkel/ArtikkelCard';

export class ArtikkelListe extends Component {
    render() {
        return this.props.artikkler.map((artikkel) => (
            <div>
                <ArtikkelCard id={artikkel.id} tittel={artikkel.tittel} kategori={artikkel.kategori} ingress={artikkel.ingress}/>
            </div>
        ))
    }
}

export default ArtikkelListe
