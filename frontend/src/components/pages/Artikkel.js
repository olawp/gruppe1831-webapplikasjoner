import React, { Component } from 'react'

export class Artikkel extends Component {
    render() {
        return (
            <div>
                <header><h1>´$tittel´</h1></header>
                <main>
                    <div>
                        <p>Av ´$forfatternavn´</p>
                        <p>´$dato´</p>
                    </div>
                    <p>´$ingress´</p>
                    <p>´$innhold´</p>
                    <p>´$kategori´</p>
                    <div>
                        <button>SLETT</button>
                        <button>REDIGER</button>
                    </div>
                </main>
            </div>
        )
    }
}

export default Artikkel
