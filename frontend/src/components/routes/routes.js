import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Hjem from '../pages/Hjem';
import Kontorer from '../pages/Kontorer';
import Fagartikler from '../pages/Fagartikler';
import Kontakt from '../pages/Kontakt';
import LoggInn from '../pages/LoggInn';
import Artikkel from '../pages/Artikkel';
import DetaljertKontor from '../pages/DetaljertKontor';
import NyArtikkel from '../pages/NyArtikkel';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

export class routes extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Router>
                    <Route exact path="/" render={props => (
                        <React.Fragment>
                        <Hjem></Hjem>
                        </React.Fragment>
                    )} />
                    <Route path="/kontorer" component={Kontorer} />
                    <Route path="/fagartikler" component={Fagartikler} />
                    <Route path="/kontakt" component={Kontakt} />
                    <Route path="/logginn" component={LoggInn} />
                    <Route path="/artikkel" component={Artikkel} />
                    <Route path="/kontor" component={DetaljertKontor} />
                    <Route path="/nyartikkel" component={NyArtikkel} />
                </Router>
                <Footer/>
            </div>
        )
    }
}

export default routes