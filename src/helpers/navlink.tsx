import * as React from "react";
import { NavLink as Link } from 'react-router-dom';

export class NavLink extends React.Component<{ to: any, activeClassName?: string, exact?: any, className?: string }, {}> {
    render() {

        let {
            activeClassName,
            className,
            exact,
            to,
            children
         } = this.props;

        return (
            <Link
                activeClassName={activeClassName !== null ? "active" : activeClassName}
                className={`nav-link ${className || ""}`}
                exact={exact}
                to={to}>
                {children}
            </Link>
        );
    }
}