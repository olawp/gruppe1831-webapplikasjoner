import React, { Component } from 'react'
import ArtikkelCard from '../layout/ArtikkelCard';

export class Fagartikler extends Component {
    render() {
        return (
            <div>
                <header><h1>Fagartikler</h1></header>
                <main>
                    <div>
                        <a href="/nyartikkel" class="button">NY ARTIKKEL</a>
                        <button>SØK</button>
                        <button>FILTER</button>
                        <div>
                            <ArtikkelCard></ArtikkelCard>
                            <ArtikkelCard></ArtikkelCard>
                            <ArtikkelCard></ArtikkelCard>
                            <ArtikkelCard></ArtikkelCard>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Fagartikler
