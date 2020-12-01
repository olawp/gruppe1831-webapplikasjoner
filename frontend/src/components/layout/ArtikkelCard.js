import React, { Component } from 'react'

export class ArtikkelCard extends Component {
    render() {
        return (
            <div>
                <a href="/artikkel">
                    <div>IMAGE</div>
                    <h1>Artikkeltittel</h1>
                    <p>Kategori</p>
                    <p>Ingress</p>
                </a>
            </div>
        )
    }
}

export default ArtikkelCard
