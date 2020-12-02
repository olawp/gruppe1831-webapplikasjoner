import React, { Component } from 'react'
import {Form, Input, Select, Button} from '../../styled/style';
import Axios from 'axios';

export class NyArtikkel extends Component {

    state = {
        display: "none"
    }

    closeCategory = () => {
        this.setState({display: "none"});
    }

    openCategory = () => {
        this.setState({display: ""});
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
            document.getElementById("category").value = "Generelt"
        )
        .catch(res => console.log(res));
    }

    render() {
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
                            <Input></Input>
                            <br/>
                            <Button type="button">CREATE</Button>
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
                            <option value="Generelt">Generelt</option>
                            <option value="Bad">Bad</option>
                            <option value="Kjøkken">Kjøkken</option>
                        </Select>
                        <Button type="button" onClick={this.openCategory}>LAG NY KATEGORI</Button>
                        <br/>
                        <label>Forfatternavn</label>
                        <br/>
                        <Select id="author">
                            <option value="Navn Navnesen">Navn Navnesen</option>
                            <option value="Ola Nordmann">Ola Nordmann</option>
                            <option value="Kari Nordmann">Kari Nordmann</option>
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
