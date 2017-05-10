import * as React from 'react';
import { Route } from 'react-router-dom';
import { Bundle } from './bundle';
import { Component } from 'react';

export interface IAsyncRouteProps {
    path: string,
    component: any,
    loadingComponent?: any
}

export const AsyncRoute = (props: IAsyncRouteProps) => {

    let {
        loadingComponent: Loading,
        component,
        path
    } = props;

    return <Route path={path} exact render={() => <Bundle load={component} callback={(Mod: any) => {
        return Mod ? <Mod /> : (Loading != null ? <Loading /> : <h1>Yükleniyor...</h1>)
    }} />} />
}