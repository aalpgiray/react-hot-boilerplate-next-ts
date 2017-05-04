import { observable, action } from 'mobx'
import { RouterStore } from "mobx-react-router/types";

export interface ICounterStore {
    counter: number;
    count: (by?: number) => void;
    setCounter: (value: number) => void;
}

export interface IStore {
    counterStore: ICounterStore;
}

class Store implements IStore {
    counterStore = new CounterStore();
}

class CounterStore implements ICounterStore {
    @observable counter = 1;
    @action count(by?: number) {
        if (by != null) this.counter = this.counter + by;
        else this.counter++;
    }
    @action setCounter(value: number) {
        this.counter = value;
    }
}

export const store = new Store();
