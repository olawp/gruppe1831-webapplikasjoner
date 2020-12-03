import React, { Component } from 'react'
import Axios from 'axios';
import {ForfatterNavn, Dato, ArtikkelTekst, ArtikkelKategori, Form, Button, Input, Select} from '../../styled/style';
import DeleteEditKnapper from '../artikkel/DeleteEditKnapp'

export class Artikkel extends Component {

    state = {
        artikkel: [],
        kategorier: [],
        forfattere: ["Navn Navnesen", "Ola Nordmann", "Kari Nordmann"],
        display: "none"
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
        Axios.get('http://localhost:5000/api/v1/categories')
        .then(res => this.setState({ kategorier: res.data }))
        .catch(
            //TODO: ADD CATCH FOR WHEN SHIT GOES WRONG
        )
    }

    convertDate(){
        var date = new Date(this.state.artikkel.createdAt)
        if(date.toString() !== "Invalid Date"){
            return(date.getDate().toString() + "." + date.getMonth().toString() + "." + date.getFullYear())
        }
    }
    
    editArticle(){
        console.log("Edit was clicked")
        Axios.put('http://localhost:5000/api/v1/articles/' + window.location.href.split("/")[4].toString(), { title: document.getElementById("title").value, ingress: document.getElementById("ingress").value, content: document.getElementById("content").value, author: document.getElementById("author").value, category: document.getElementById("category").value})
        .then(
            window.location.href = 'http://localhost:3000/artikkel/' + window.location.href.split("/")[4].toString()
        )
        .catch(error => alert("Artikklen ble ikke redigert. \n Error: " + {error}))
    }

    openEditArticle = () => {
        this.setState({display: ""});
        document.getElementById("title").value = this.state.artikkel.title;
        document.getElementById("ingress").value = this.state.artikkel.ingress;
        document.getElementById("content").value = this.state.artikkel.content;
        document.getElementById("author").value = this.state.artikkel.author;
        document.getElementById("category").value = this.state.artikkel.category;
    }

    render() {

        const categories = []

        for (let i = 0; i < this.state.kategorier.length; i++) {
            categories.push(<option value={this.state.kategorier[i].category}>{this.state.kategorier[i].category}</option>)
        }

        return (
            <div>
                {
                    //GJENBRUKER KLASSEN FRA "Ny Kategori Modalen" - If it ain't broke, dont fix it
                }
                <div style={{display: this.state.display}} className="nykategori">
                    <div className="nykategori-innhold">
                        <Form>
                            <label>Tittel</label>
                            <br/>
                            <Input id="title"></Input>
                            <br/>
                            <label>Ingress</label>
                            <br/>
                            <Input id="ingress"></Input>
                            <br/>
                            <label>Innhold</label>
                            <br/>
                            <Input type="textarea" id="content"></Input>
                            <br/>
                            <label>Kategori</label>
                            <br/>
                            <Select id="category">
                                {categories}
                            </Select>
                            <br/>
                            <label>Forfatternavn</label>
                            <br/>
                            <Select id="author">
                                <option value={this.state.forfattere[0]}>{this.state.forfattere[0]}</option>
                                <option value={this.state.forfattere[1]}>{this.state.forfattere[1]}</option>
                                <option value={this.state.forfattere[2]}>{this.state.forfattere[2]}</option>
                            </Select>
                            <br/>
                            <Button type="button" onClick={this.editArticle}>OPPDATER ARTIKKEL</Button>
                        </Form>
                    </div>
                </div>
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
                        <DeleteEditKnapper edit={this.openEditArticle}/>
                    </div>
                </main>
            </div>
        )
    }
}

export default Artikkel
