import { CounterActions, ICounterAction } from '../actions/counter.actions';
import { Record } from 'immutable'

export interface ICounterStore {
    value?: number,
};

export class CounterState extends Record({ value: 0 }) implements ICounterStore {
    value: number;

    constructor(params?: ICounterStore) {
        params ? super(params) : super();
    }

    with(values: ICounterStore) {
        return this.merge(values) as this;
    }
}

const defaultState = new CounterState({
    value: 0
});

export function counterReducer(state: CounterState = defaultState, action: ICounterAction): CounterState {

    switch (action.type) {
        case CounterActions.Increment:
            return state.with({ value: state.value + 1 });
        case CounterActions.Decrement:
            return state.with({ value: state.value - 1 });;
        default:
            return state;
    }

}