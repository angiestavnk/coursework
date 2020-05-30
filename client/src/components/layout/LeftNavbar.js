import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import { useHistory } from "react-router-dom";


const LeftNav = (props) => {
    const history = useHistory();
    const [test, settest] = React.useState("")
    return (
    <Router>
        <Route render={({ }) => (
            <React.Fragment>
            <SideNav style = {{ 'backgroundColor': '#343a40' ,'opacity': '0.9', 'position': 'fixed' }}
            onSelect={(selected) => {
                    history.push("/" + selected)
            } }>
        <SideNav.Toggle />
        <SideNav.Nav>
            <NavItem eventKey="" > 
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Home
                </NavText>
            </NavItem>
            <NavItem eventKey="devices">
                 <NavIcon >
                    <i className="fa fa-fw fa-gears" style={{ fontSize: '1.75em' }}  />
                    </NavIcon>
                     <NavText>
                     Devices
                    </NavText>
                </NavItem>
            <NavItem eventKey="dashboard">
                <NavIcon>
                    <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Charts
                </NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
    
    </React.Fragment>
    )}
    />
    </Router>
    )}
export default LeftNav;
