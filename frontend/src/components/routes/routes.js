/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hjem from '../pages/Hjem';
import Kontorer from '../pages/Kontorer';
import Fagartikler from '../pages/Fagartikler';
import Kontakt from '../pages/Kontakt';
import LoggInn from '../pages/LoggInn';
import SignUp from '../pages/SignUp';
import Artikkel from '../pages/Artikkel';
import DetaljertKontor from '../pages/DetaljertKontor';
import NyArtikkel from '../pages/NyArtikkel';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { useAuthContext } from '../../context/AuthProvider';
import NoMatch from '../NoMatch';

const AdminRoutes = ({ children, ...rest }) => {
  const { isLoggedIn, isAdmin, isLoading } = useAuthContext();
  return (
    <Route
      {...rest}
      render={() => isLoggedIn && isAdmin && !isLoading && children}
    />
  );
};

const routes = () => (
  <div>
    <Navbar />
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <React.Fragment>
              <Hjem></Hjem>
            </React.Fragment>
          )}
        />
        <Route path="/kontorer">
          <Kontorer />
        </Route>
        <Route path="/fagartikler">
          <Fagartikler />
        </Route>
        <Route path="/kontakt">
          <Kontakt />
        </Route>
        <Route path="/logginn">
          <LoggInn />
        </Route>
        <Route path="/artikkel">
          <Artikkel />
        </Route>
        <Route path="/kontor">
          <DetaljertKontor />
        </Route>
        <Route path="/registrerdeg">
          <SignUp />
        </Route>
        <AdminRoutes path="/nyartikkel">
          <NyArtikkel />
        </AdminRoutes>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
    <Footer />
  </div>
);

export default routes;
