import React, { Component } from 'react'

export class Fagartikler extends Component {
    render() {
        return (
            <div>
                <header><h1>Fagartikler</h1></header>
                <main>
                    <div>
                        <a href="/nyartikkel" class="button">NY ARTIKKEL</a>
                        <button>SØK</button>
                        <button>FILTER</button>
                    </div>
                </main>
            </div>
        )
    }
}

export default Fagartikler
