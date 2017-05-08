import * as React from "react";
import { Component } from 'react';
import { ICounterStore, IStore } from '../.././store';

import * as styles from './style.css';
import { RouteComponentProps, match } from "react-router";
import { Location, History } from 'history';

interface State {
}

interface IProps extends RouteComponentProps<IProps> {
  counterStore: ICounterStore;
}

class Props implements IProps {
  constructor(public counterStore: ICounterStore) {

  }
  match: match<IProps>;
  location: Location;
  history: History;
}

@inject((store: IStore): IProps => new Props(store.counterStore))
@observer
export default class Counter extends Component<IProps, State> {

  interval: number;

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    this.props.counterStore.count();
  }

  changeCounter(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.counterStore.setCounter(parseInt(e.target.value));
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-1">
          <input className="form-control" type="number" value={this.props.counterStore.counter} onChange={this.changeCounter.bind(this)} />
        </div>
        <h2 className={styles.title + " col-md-12"}>Counter: {this.props.counterStore.counter}</h2>
      </div>
    )
  }
}