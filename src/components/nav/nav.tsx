import * as React from 'react';
import { Nav, NavItem } from "reactstrap";
import { Link } from 'react-router-dom';

export const NavigationPannel = () => {
    return (
        <Nav pills>
            <NavItem>
                <Link to="/" className="nav-link active">Home</Link>
            </NavItem>
            <NavItem>
                <Link to="/app" className="nav-link" >App</Link>
            </NavItem>
        </Nav>
    )
}