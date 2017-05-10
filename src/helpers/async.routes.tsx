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
    let Loading = props.loadingComponent;
    return <Route path={props.path} exact render={() => <Bundle load={props.component} callback={(Mod: any) => {
        return Mod ? <Mod /> : (props.loadingComponent != null ? <Loading /> : <h1>Yükleniyor...</h1>)
    }} />} />
}