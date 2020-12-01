import React, { Component } from 'react'

export class NyArtikkel extends Component {
    render() {
        return (
            <div>
                <header><h1>Ny artikkel</h1></header>
                <main>
                    <form>
                        <label>Tittel</label>
                        <br/>
                        <input></input>
                        <br/>
                        <label>Innledning</label>
                        <br/>
                        <input></input>
                        <br/>
                        <label>Subtittel</label>
                        <br/>
                        <input></input>
                        <br/>
                        <label>Tekst for subtittel</label>
                        <br/>
                        <input></input>
                        <br/>
                        <label>Kategori</label>
                        <br/>
                        <input></input>
                        <button>LAG NY KATEGORI</button>
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
