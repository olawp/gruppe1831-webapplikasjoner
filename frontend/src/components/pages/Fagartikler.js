import React, { Component } from 'react'
import ArtikkelList from '../artikkel/ArtikkelList';
import {Button} from '../../styled/style';
import Axios from 'axios';
import NyArtikkelKnapp from '../artikkel/NyArtikkelKnapp';

export class Fagartikler extends Component {

    state = {
        artikkler: []
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/api/v1/articles')
        .then(res => this.setState({ artikkler: res.data }))
        .catch(error => alert("Kunne ikke hente artikler. \nError: " + error))
    }

    render() {
        return (
            <div>
                <header><h1>Fagartikler</h1></header>
                <main>
                    <div>
                        <NyArtikkelKnapp/>
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
