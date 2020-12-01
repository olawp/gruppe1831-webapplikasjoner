import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Hjem from '../pages/Hjem';
import Kontorer from '../pages/Kontorer';
import Fagartikler from '../pages/Fagartikler';
import Kontakt from '../pages/Kontakt';
import LoggInn from '../pages/LoggInn';

export class routes extends Component {
    render() {
        return (
            <div>
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
                </Router>
            </div>
        )
    }
}

export default routes