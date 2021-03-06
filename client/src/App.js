import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import setAuthToken from './utils/setAuthToken'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import OldData from './components/dashboard/OldData.tsx'
//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';

import './App.css';
import ApartmentDetails from './components/dashboard/ApartmentDetails';
import LeftNav from './components/layout/LeftNavbar';


if(localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => { 
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);
    return(
<Provider store={store}>
<Router >
    <Fragment>
    <Navbar />
    <LeftNav  />
    <Route exact path='/'component={Landing} />

    <section className="container">
        <Alert />
        <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/data" component={OldData}/>
            <PrivateRoute exact path="/apartmentDetails" component={ApartmentDetails} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
    </section>
    </Fragment>
 </Router>
 </Provider>
)};
export default App;
