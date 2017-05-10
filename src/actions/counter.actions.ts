export class CounterActions {
    static Increment = "INCREMENT_COUNTER";
    static Decrement = "DECREMENT_COUNTER";
}

export interface ICounterAction {
    type: CounterActions
}

export function incrementCounter(): ICounterAction {
    return {
        type: CounterActions.Increment
    }
}

export function decrementCounter(): ICounterAction {
    return {
        type: CounterActions.Decrement
    }
}


(window as any).incrementCounter = incrementCounter;