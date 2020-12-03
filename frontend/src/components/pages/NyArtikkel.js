import React, { Component } from 'react'
import {Form, Input, Select, Button} from '../../styled/style';
import Axios from 'axios';

export class NyArtikkel extends Component {

    state = {
        display: "none",
        kategorier: [],
        forfattere: ["Navn Navnesen", "Ola Nordmann", "Kari Nordmann"]
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
        .catch(//TODO: ADD CATCH FOR WHEN SHIT GOES WRONG
        )
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
        .catch(res => console.log(res));
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
                        <Button type="button" onClick={this.openCategory}>LAG NY KATEGORI</Button>
                        <br/>
                        <label>Forfatternavn</label>
                        <br/>
                        <Select id="author">
                            <option value={this.state.forfattere[0]}>{this.state.forfattere[0]}</option>
                            <option value={this.state.forfattere[1]}>{this.state.forfattere[1]}</option>
                            <option value={this.state.forfattere[2]}>{this.state.forfattere[2]}</option>
                        </Select>
                        <br/>
                        <Button type="button" onClick={this.lagNyArtikkel}>CREATE</Button>
                    </Form>
                </main>
            </div>
        )
    }
}

export default NyArtikkel
