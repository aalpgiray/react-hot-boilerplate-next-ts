import * as React from "react";
import { Component } from 'react';
import { observer } from 'mobx-react'
import { ICounterStore, IStore } from './store';
import { inject } from 'mobx-react';

interface State {
  counter: number;
}

interface Props {
  counterStore: ICounterStore;
}

@inject((store: IStore): Props => ({
  counterStore: store.counterStore
}))
@observer
export default class Counter extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
  }


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
      <div>
        <div className="col-md-1">
        <input className="form-control" type="number" value={this.props.counterStore.counter} onChange={this.changeCounter.bind(this)} />
          </div>
        <h2>Counter: {this.props.counterStore.counter}</h2>
      </div>
    )
  }
}
