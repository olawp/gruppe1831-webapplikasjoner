import React, { Component } from 'react'

export class Kontorer extends Component {
    render() {
        return (
            <div>
                <header><h1>Våre kontorer</h1></header>
                <main>
                    <button>FILTER</button> <p>LIST VIEW</p> <p>GRID VIEW</p>
                    <h2>Fredrikstad (8 kontorer)</h2>
                    <h2>Sarpsborg (5 kontorer)</h2>
                    <h2>Moss (4 kontorer)</h2>
                    <h2>Oslo (4 kontorer)</h2>
                </main>
            </div>
        )
    }
}

export default Kontorer
