import * as React from 'react';
import { Nav, NavItem } from "reactstrap";
import { NavLink as Link } from 'react-router-dom';
import { Component } from 'react';

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

class NavLink extends Component<{ to: any, activeClassName?: string, exact?: any, className?: string }, {}> {
    render() {
        return (
            <Link
                activeClassName={this.props.activeClassName || "" }
                className={`nav-link ${this.props.className || ""}`}
                exact={this.props.exact}
                to={this.props.to}>
                {this.props.children}
            </Link>
        );
    }
}