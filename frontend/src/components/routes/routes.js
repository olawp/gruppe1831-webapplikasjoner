import React from 'react'
import { BrowserRouter as Router, Route, Switch, //Redirect
 } from 'react-router-dom';
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
import { useAuthContext } from '../../context/AuthProvider';

/*
const AuthenticatedRoutes = ({children, ...rest}) => {
    const { isLoggedIn, isLoading } = useAuthContext();
    return(
        <Route {...rest} render={() => isLoggedIn && !isLoading ? <div>children</div> : <Redirect to='/login'/>}/>
    )
}
*/
const AdminRoutes = ({children, ...rest}) => {
    const { isLoggedIn, isAdmin, isLoading } = useAuthContext();
    return(
        <Route {...rest} render={() => isLoggedIn && isAdmin && !isLoading && children}/>
    )
}

const routes = () => {
        return (
        <div>
            <Navbar/>
            <Router>
                <Switch>
                    <Route exact path="/" render={props => (
                        <React.Fragment>
                            <Hjem></Hjem>
                        </React.Fragment>
                    )} />
                    <Route path="/kontorer">
                        <Kontorer/>
                    </Route>
                    <Route path="/fagartikler">
                        <Fagartikler/>
                    </Route>
                    <Route path="/kontakt">
                        <Kontakt/>
                    </Route>
                    <Route path="/logginn">
                        <LoggInn/>
                    </Route>
                    <Route path="/artikkel">
                        <Artikkel/>
                    </Route>
                    <Route path="/kontor">
                        <DetaljertKontor/>
                    </Route>
                    <AdminRoutes path="/nyartikkel">
                        <NyArtikkel/>
                    </AdminRoutes>
                </Switch>
            </Router>
            <Footer/>
        </div>
    )
}

export default routes