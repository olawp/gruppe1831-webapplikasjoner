import React, { Component } from 'react'
import ArtikkelCard from '../layout/ArtikkelCard';
import {Button} from '../../styled/style';

export class Fagartikler extends Component {
    render() {
        return (
            <div>
                <header><h1>Fagartikler</h1></header>
                <main>
                    <div>
                        <a href="/nyartikkel" className="button">NY ARTIKKEL</a>
                        <Button>SØK</Button>
                        <Button>FILTER</Button>
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
