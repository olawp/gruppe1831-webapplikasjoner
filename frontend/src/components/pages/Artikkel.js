import React, { Component } from 'react'
import Axios from 'axios';
import {ForfatterNavn, Dato, ArtikkelTekst, ArtikkelKategori, SlettKnapp, RedigerKnapp} from '../../styled/style';

export class Artikkel extends Component {

    state = {
        artikkel: []
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/api/v1/articles/' + window.location.href.split("/")[4].toString())
        .then(res => this.setState({ artikkel: res.data }))
        .catch(function(error){
            if(error.toString() === "Error: Request failed with status code 500"){
                document.getElementById("tittel").innerHTML = "Finner ikke artikkelen du ser etter";
                document.getElementById("forfatter").innerHTML = "";
                console.log("Finner ikke artikkelen")
            }
        })
    }

    convertDate(){
        var date = new Date(this.state.artikkel.createdAt)
        if(date.toString() !== "Invalid Date"){
            return(date.getDate().toString() + "." + date.getMonth().toString() + "." + date.getFullYear())
        }
    }

    render() {
        return (
            <div>
                <header><h1 id="tittel">{this.state.artikkel.title}</h1></header>
                <main>
                    <div>
                        <ForfatterNavn id="forfatter">Av {this.state.artikkel.author}</ForfatterNavn>
                        <Dato>{this.convertDate()}</Dato>
                    </div>
                    <ArtikkelTekst>{this.state.artikkel.ingress}</ArtikkelTekst>
                    <ArtikkelTekst>{this.state.artikkel.content}</ArtikkelTekst>
                    <ArtikkelKategori>{this.state.artikkel.category}</ArtikkelKategori>
                    <div>
                        <SlettKnapp type="button">SLETT</SlettKnapp>
                        <RedigerKnapp type="button">REDIGER</RedigerKnapp>
                    </div>
                </main>
            </div>
        )
    }
}

export default Artikkel
