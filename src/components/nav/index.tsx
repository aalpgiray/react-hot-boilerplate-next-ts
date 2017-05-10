import * as React from 'react';
import { Nav, NavItem } from "reactstrap";
import { NavLink } from '../../helpers/navlink';

export const NavigationPannel = () => {
    return (
        <Nav pills>
            <NavItem>
                <NavLink
                    to="/"
                    exact
                    activeClassName="active">
                    Home
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    to="/app"
                    activeClassName="active">
                    App
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    to="/counter"
                    activeClassName="active">
                    Counter
                </NavLink>
            </NavItem>
        </Nav>
    )
}