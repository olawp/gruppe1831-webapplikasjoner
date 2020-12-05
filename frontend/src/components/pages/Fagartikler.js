import React, { useEffect, useState} from 'react'
import { list } from '../../utils/artikkelService';
import {Button} from '../../styled/style';
import NyArtikkelKnapp from '../artikkel/NyArtikkelKnapp';
import ArtikkelList from '../artikkel/ArtikkelList';

const NyArtikkel = ( ) => {
    const[artikkler, setArtikkler] = useState(null);
    const[error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await list();
            if(error){
                setError(error);
            }
            else{
                setArtikkler(data);
            }
        };
        fetchData();
    }, []);

    if(artikkler !== null){
        return(
            <div>
                <header>
                    <h1>Fagartikler</h1>
                </header>
                <main>
                    <div>
                        <NyArtikkelKnapp/>
                        <Button>SØK</Button>
                        <Button>FILTER</Button>
                        <div>
                            <ArtikkelList artikkler={artikkler}></ArtikkelList>
                        </div> 
                        <a href="?page=1">1</a> 
                        <a href="?page=2">2</a>
                        <a href="?page=3">3</a>
                    </div>
                </main>
            </div>
        )
    }
    else{
        return(
            <div>
                <header>
                    <h1>Laster...</h1>
                </header>
                <main>
                    <div>
                        <p>{error}</p>
                    </div>
                </main>
            </div>
        )
    }
}

export default NyArtikkel;


/*import React, { Component } from 'react'
import ArtikkelList from '../artikkel/ArtikkelList';
import Axios from 'axios';

export class Fagartikler extends Component {

    state = {
        artikkler: []
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/api/v1/articles')
        .then(res => this.setState({ artikkler: res.data }))
        .catch(error => alert("Kunne ikke hente artikler. \nError: " + error))
    }

    searchFunc(){
        console.log("Søk klikket")
    }

    filterFunc(){
        console.log("Filter klikket")
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
                        <a href="?page=1">1</a> 
                        <a href="?page=2">2</a>
                        <a href="?page=3">3</a>
                    </div>
                </main>
            </div>
        )
    }
}

export default Fagartikler
*/