import React, { Component } from 'react'
import ArtikkelList from '../artikkel/ArtikkelList';
import {Button} from '../../styled/style';

export class Fagartikler extends Component {

    state = {
        artikkler: [
            {
                id: 1,
                tittel: "Bad og sortmugg",
                kategori: "Bad",
                ingress: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                id: 2,
                tittel: "Kjøkken og hygiene",
                kategori: "Kjøkken",
                ingress: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ]
    }

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
                            <ArtikkelList artikkler={this.state.artikkler}></ArtikkelList>
                        </div>      
                    </div>
                </main>
            </div>
        )
    }
}

export default Fagartikler
