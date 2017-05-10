import * as React from "react";
import { Component } from 'react';

import * as styles from './style.css';
import { Location, History } from 'history';
import { ICounterStore } from '../../reducers/counter.reducer';
import { IStore } from '../../store';
import { connect, Dispatch } from "react-redux";
import { CounterActions, incrementCounter } from '../../actions/counter.actions';
import { withRouter } from "react-router-dom";

interface State {
}

interface IStoreProps {
  counterStore: ICounterStore;
}

interface IDispatchProps {
  incrementCounter: () => void;
}

interface IProps extends IStoreProps, IDispatchProps {
}

const mapStateToProps = (state: IStore): IStoreProps => {
  return {
    counterStore: state.counter
  }
}

const mapDispatchToProps = (dispatch: Dispatch<CounterActions>): IDispatchProps => {
  return {
    incrementCounter: () => { dispatch(incrementCounter()) }
  }
}

class Counter extends Component<IProps, State> {

  interval: number;

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    this.props.incrementCounter();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="row">
        <h2 className={styles.title + " col-md-12"}>Counter : <span className={styles.counterColor}>{this.props.counterStore.value}</span></h2>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Counter) as any);
