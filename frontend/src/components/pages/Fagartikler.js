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

    //FILTER OG SEARCH GJØRE QUERIEN UNØDVENDIG LANG, MEN DEN FUNKER !!!SE ETTER FIKS!!!

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

    let searchTerm = "";

    function search(){
        if(!document.getElementById("searchField").value.replace(/\s/g, '').length && searchTerm === ""){
            searchTerm = null;
            search();
        }
        else{
            searchTerm = document.getElementById("searchField").value;
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
    }

    if(artikkler !== null && kategorier !== null){
        const categories = [];
        let tittel = "";

        for (let i = 0; i < kategorier.length; i++) {
            categories.push(<option value={kategorier[i].category}>{kategorier[i].category}</option>)
        }
        if(artikkler.results === 0){
            tittel = "Fant ingen artikler som passet søket ditt"
        }
        else{
            tittel = "Fagartikler"
        }
        return(
            <div>
                <header>
                    <h1>{tittel}</h1>
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