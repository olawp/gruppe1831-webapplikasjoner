import React, { Component } from 'react'
import {NavStyle, Button} from '../../styled/style';

export class Navbar extends Component {

    state = {
        display: ""
    }

    burgerMenu = () => {
        this.setState({display: "block"});
    }

    render() {
        return (
            <div>
                <NavStyle className="navigationBar">
                    <h3>FG</h3>
                    <Button className="mobileMenu" onClick={this.burgerMenu}>Menu</Button>
                    <div>
                        <a style={{display: this.state.display}} className="loggInn" href="/logginn">LOGG INN</a>
                        <a style={{display: this.state.display}} href="/kontakt">Kontakt</a>
                        <a style={{display: this.state.display}} href="/fagartikler">Fagartikler</a>
                        <a style={{display: this.state.display}} href="/kontorer">Kontorer</a>
                        <a style={{display: this.state.display}} className="active" href="/">Hjem</a>
                    </div>
                </NavStyle>
            </div>
        )
    }
}

export default Navbar
