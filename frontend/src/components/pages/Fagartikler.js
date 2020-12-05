import React, { useEffect, useState} from 'react'
import { list } from '../../utils/artikkelService';
import { list as listCategory } from '../../utils/categoryService';
import { Button, Input, Select } from '../../styled/style';
import NyArtikkelKnapp from '../artikkel/NyArtikkelKnapp';
import ArtikkelList from '../artikkel/ArtikkelList';

let URL = `/articles`;

let isHandled = false;

const NyArtikkel = ( ) => {
    const[artikkler, setArtikkler] = useState(null);
    const[kategorier, setKategorier] = useState(null);
    const[error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await list(URL);
            if(error){
                setError(error);
            }
            else{
                setArtikkler(data);
            }
        };
        const fetchCategoryData = async () => {
            const { data, error } = await listCategory();
            if(error){
                setError(error);
            }
            else{
                setKategorier(data);
            }
        }
        fetchData();
        fetchCategoryData();
    }, []);

    function filter(){
        let filter = document.getElementById("filter").value;
        if(!isHandled){
            URL += `?category=${filter}`;
            isHandled = true;
        }
        else{
            URL += `&category=${filter}`;
        }
        const fetchData = async () => {
            const { data, error } = await list(`${URL}`);
            if(error){
                setError(error);
            }
            else{
                setArtikkler(data);
            }
        };
        fetchData();
    }

    function search(){
        let searchTerm = document.getElementById("searchField").value;
        if(!isHandled){
            URL += `?q=${searchTerm}`;
            isHandled = true;
        }
        else{
            URL += `&q=${searchTerm}`;
        }
        const fetchData = async () => {
            const { data, error } = await list(`${URL}`);
            if(error){
                setError(error);
            }
            else{
                setArtikkler(data);
            }
        };
        fetchData();
    }

    if(artikkler !== null && kategorier !== null){
        const categories = []

        for (let i = 0; i < kategorier.length; i++) {
            categories.push(<option value={kategorier[i].category}>{kategorier[i].category}</option>)
        }
        return(
            <div>
                <header>
                    <h1>Fagartikler</h1>
                </header>
                <main>
                    <div>
                        <div style={{float: "left"}}>
                            <NyArtikkelKnapp />
                        </div>
                        <div style={{textAlign: "right"}}>
                            <Input style={{width: "auto"}} id="searchField" placeholder="Hva ser du etter?"/>
                            <Button onClick={search}>SØK</Button>
                            <br/>
                            <Select id="filter">
                                {categories}
                            </Select>
                            <Button onClick={filter}>FILTRER KATEGORI</Button>
                        </div>
                        <div>
                            <ArtikkelList artikkler={artikkler.data}></ArtikkelList>
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