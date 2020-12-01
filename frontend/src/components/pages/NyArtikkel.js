import React, { Component } from 'react'

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
                        <form>
                            <span onClick={this.closeCategory}>&times;</span>
                            <label>Ny Kategori</label>
                            <br/>
                            <input></input>
                            <br/>
                            <button type="button">CREATE</button>
                        </form>
                    </div>
                </div>
                    <form>
                        <label>Tittel</label>
                        <br/>
                        <input></input>
                        <br/>
                        <label>Innledning</label>
                        <br/>
                        <input></input>
                        <br/>
                        <label>Undertittel</label>
                        <br/>
                        <input></input>
                        <br/>
                        <label>Tekst for undertittel</label>
                        <br/>
                        <input></input>
                        <br/>
                        <label>Kategori</label>
                        <br/>
                        <input></input>
                        <button type="button" onClick={this.openCategory}>LAG NY KATEGORI</button>
                        <br/>
                        <label>Forfatternavn</label>
                        <br/>
                        <input></input>
                        <br/>
                        <button>CREATE</button>
                    </form>
                </main>
            </div>
        )
    }
}

export default NyArtikkel
