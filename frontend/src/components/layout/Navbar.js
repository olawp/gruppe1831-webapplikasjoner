import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navigationBar"><h3>FG</h3> <a className="loggInn" href="/logginn">LOGG INN</a><a href="/kontakt">Kontakt</a><a href="/fagartikler">Fagartikler</a><a href="/kontorer">Kontorer</a><a className="active" href="/">Hjem</a></nav>
            </div>
        )
    }
}

export default Navbar
