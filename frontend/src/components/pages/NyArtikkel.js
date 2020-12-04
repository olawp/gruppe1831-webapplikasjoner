import React, { Component } from 'react'
import {Form, Input, Select, Button} from '../../styled/style';
import Axios from 'axios';

export class NyArtikkel extends Component {

    state = {
        display: "none",
        kategorier: [],
        forfattere: ["Navn Navnesen", "Ola Nordmann", "Kari Nordmann"],
        disabled: "true",
        color: "grey",
        errors: {},
        titleIsFilled: "red",
        ingressIsFilled: "red",
        contentIsFilled: "red"
    }

    closeCategory = () => {
        this.setState({display: "none"});
    }

    openCategory = () => {
        this.setState({display: ""});
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/api/v1/categories')
        .then(res => this.setState({ kategorier: res.data }))
        .catch(error => alert("Artikklen ble ikke opprettet. \n Error: " + {error}))
    }

    lagNyArtikkel = () => {
        let title = document.getElementById("title").value;
        let ingress = document.getElementById("ingress").value;
        let content = document.getElementById("content").value;
        let author = document.getElementById("author").value;
        let category = document.getElementById("category").value;
        let hidden;

        if(document.getElementById("hiddenCheckbox").checked){
            hidden = true;
        }
        else{
            hidden = false;
        }

        Axios.post('http://localhost:5000/api/v1/articles', {
            title,
            ingress,
            content,
            author,
            category,
            hidden
        })
        .then(
            document.getElementById("title").value = "",
            document.getElementById("ingress").value = "",
            document.getElementById("content").value = "",
            document.getElementById("author").value = "Navn Navnesen",
            document.getElementById("category").value = this.state.kategorier[0].category,
            document.getElementById("hiddenCheckbox").checked = false
        )
        .catch(error => alert("Kunne ikke opprette ny artikkel.\nError: " + error));
    }

    lagNyKategori = () => {
        let newCategory = document.getElementById("newCategory").value;
        
        Axios.post('http://localhost:5000/api/v1/categories', {
            category: newCategory
        })
        .then(
            document.getElementById("newCategory").value = "",
            this.closeCategory
        )
        .catch(error => alert("Kategorien ble ikke opprettet. \n Error: " + {error}));
    }

    handleValidation(){
        let formIsValid = true;

        if(!document.getElementById("title").value){
           formIsValid = false;
           this.setState({titleIsFilled: "red"});
           document.getElementById("titleLabel").innerHTML = "Tittel*";
        }
        else{
            this.setState({titleIsFilled: "black"});
            document.getElementById("titleLabel").innerHTML = "Tittel";
        }

        if(!document.getElementById("ingress").value){
            formIsValid = false;
            this.setState({ingressIsFilled: "red"});
            document.getElementById("ingressLabel").innerHTML = "Ingress*";
        }
        else{
            this.setState({ingressIsFilled: "black"});
            document.getElementById("ingressLabel").innerHTML = "Ingress";
        }

        if(!document.getElementById("content").value){
            formIsValid = false;
            this.setState({contentIsFilled: "red"});
            document.getElementById("contentLabel").innerHTML = "Innhold*";
        }
        else{
            this.setState({contentIsFilled: "black"});
            document.getElementById("contentLabel").innerHTML = "Innhold";
        }


        if(formIsValid){
            this.setState({color: "green", disabled: ""});
            document.getElementById("filled").innerHTML = "";
        }
        else{
            this.setState({color: "grey", disabled: "true"});
            document.getElementById("filled").innerHTML = "* må være fyllt inn";
        }
        
   }

    render() {

        const categories = []

        for (let i = 0; i < this.state.kategorier.length; i++) {
            categories.push(<option value={this.state.kategorier[i].category}>{this.state.kategorier[i].category}</option>)
        }

        return (
            <div>
                <header><h1>Ny artikkel</h1></header>
                <main>
                <div style={{display: this.state.display}} className="nykategori">
                    <div className="nykategori-innhold">
                        <Form>
                            <span onClick={this.closeCategory}>&times;</span>
                            <label>Ny Kategori</label>
                            <br/>
                            <Input id="newCategory"></Input>
                            <br/>
                            <Button type="button" onClick={this.lagNyKategori}>CREATE</Button>
                        </Form>
                    </div>
                </div>
                    <Form encType="multipart/form-data">
                        <label id="titleLabel" style={{color: this.state.titleIsFilled}}>Tittel*</label>
                        <br/>
                        <Input id="title" style={{border: "solid "+this.state.titleIsFilled+" 1px"}} onChange={this.handleValidation.bind(this)} ></Input>
                        <br/>
                        <label id="ingressLabel" style={{color: this.state.ingressIsFilled}}>Ingress*</label>
                        <br/>
                        <Input id="ingress" style={{border: "solid "+this.state.ingressIsFilled+" 1px"}} onChange={this.handleValidation.bind(this)} ></Input>
                        <br/>
                        <label id="contentLabel" style={{color: this.state.contentIsFilled}}>Innhold*</label>
                        <br/>
                        <Input type="textarea" id="content" style={{border: "solid "+this.state.contentIsFilled+" 1px"}} onChange={this.handleValidation.bind(this)} ></Input>
                        <br/>
                        <label>Innholdet skal kun være synlig for innloggede brukere:</label>
                        <Input style={{zoom: 1.25, transform: "scale(1.25)", width: "auto", marginLeft: "5px"}} type="checkbox" id="hiddenCheckbox" onClick={this.test}></Input>
                        <br/>
                        <p style={{color: "red", fontStyle: "italic", fontSize: "10px"}} id="filled">* må være fyllt inn</p>
                        <label>Last opp artikkelbilde: </label>
                        <Input style={{width: "auto"}} type="file" id="bilde" accept=".jpeg,.jpg,.png" />
                        <br/>
                        <label>Kategori</label>
                        <br/>
                        <Select id="category">
                            {categories}
                        </Select>
                        <Button type="button" style={{backgroundColor: "green"}} onClick={this.openCategory}>LAG NY KATEGORI</Button>
                        <br/>
                        <br/>
                        <label>Forfatternavn</label>
                        <br/>
                        <Select id="author">
                            <option value={this.state.forfattere[0]}>{this.state.forfattere[0]}</option>
                            <option value={this.state.forfattere[1]}>{this.state.forfattere[1]}</option>
                            <option value={this.state.forfattere[2]}>{this.state.forfattere[2]}</option>
                        </Select>
                        <br/>
                        <br/>
                        <Button disabled={this.state.disabled} style={{backgroundColor: this.state.color}} type="button" onClick={this.lagNyArtikkel}>CREATE</Button>
                    </Form>
                </main>
            </div>
        )
    }
}

export default NyArtikkel
