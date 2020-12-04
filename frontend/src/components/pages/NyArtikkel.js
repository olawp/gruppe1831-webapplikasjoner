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

        Axios.post('http://localhost:5000/api/v1/articles', {
            title,
            ingress,
            content,
            author,
            category
        })
        .then(
            document.getElementById("title").value = "",
            document.getElementById("ingress").value = "",
            document.getElementById("content").value = "",
            document.getElementById("author").value = "Navn Navnesen",
            document.getElementById("category").value = this.state.kategorier[0].category
        )
        .catch(res => console.log(res));
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
        }
        else{
            this.setState({titleIsFilled: "black"});
        }

        if(!document.getElementById("ingress").value){
            formIsValid = false;
            this.setState({ingressIsFilled: "red"});
        }
        else{
            this.setState({ingressIsFilled: "black"});
        }

        if(!document.getElementById("content").value){
            formIsValid = false;
            this.setState({contentIsFilled: "red"});
        }
        else{
            this.setState({contentIsFilled: "black"});
        }


        if(formIsValid){
            this.setState({color: "green", disabled: ""});
        }
        else{
            this.setState({color: "grey", disabled: "true"});
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
                    <Form>
                        <label style={{color: this.state.titleIsFilled}}>Tittel</label>
                        <br/>
                        <Input id="title" style={{border: "solid "+this.state.titleIsFilled+" 1px"}} onChange={this.handleValidation.bind(this)} ></Input>
                        <br/>
                        <label style={{color: this.state.ingressIsFilled}}>Ingress</label>
                        <br/>
                        <Input id="ingress" style={{border: "solid "+this.state.ingressIsFilled+" 1px"}} onChange={this.handleValidation.bind(this)} ></Input>
                        <br/>
                        <label style={{color: this.state.contentIsFilled}}>Innhold</label>
                        <br/>
                        <Input type="textarea" id="content" style={{border: "solid "+this.state.contentIsFilled+" 1px"}} onChange={this.handleValidation.bind(this)} ></Input>
                        <br/>
                        <label>Kategori</label>
                        <br/>
                        <Select id="category">
                            {categories}
                        </Select>
                        <Button type="button" style={{backgroundColor: "green"}} onClick={this.openCategory}>LAG NY KATEGORI</Button>
                        <br/>
                        <label>Forfatternavn</label>
                        <br/>
                        <Select id="author">
                            <option value={this.state.forfattere[0]}>{this.state.forfattere[0]}</option>
                            <option value={this.state.forfattere[1]}>{this.state.forfattere[1]}</option>
                            <option value={this.state.forfattere[2]}>{this.state.forfattere[2]}</option>
                        </Select>
                        <br/>
                        <Button disabled={this.state.disabled} style={{backgroundColor: this.state.color}} type="button" onClick={this.lagNyArtikkel}>CREATE</Button>
                    </Form>
                </main>
            </div>
        )
    }
}

export default NyArtikkel
