import React, { Component } from 'react'
import {Form, Input, Button} from '../../styled/style';

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
                        <Input></Input>
                        <br/>
                        <label>Ingress</label>
                        <br/>
                        <Input></Input>
                        <br/>
                        <label>Innhold</label>
                        <br/>
                        <Input></Input>
                        <br/>
                        <label>Kategori</label>
                        <br/>
                        <Input></Input>
                        <Button type="button" onClick={this.openCategory}>LAG NY KATEGORI</Button>
                        <br/>
                        <label>Forfatternavn</label>
                        <br/>
                        <Input></Input>
                        <br/>
                        <Button>CREATE</Button>
                    </Form>
                </main>
            </div>
        )
    }
}

export default NyArtikkel
