export interface CounterState {
  count: number;
}

export interface CounterGetters {
  doubleCount: number;
  isEven: boolean;
}

export interface CounterActions {
  increment(): void;
  decrement(): void;
  reset(): void;
  incrementBy(amount: number): void;
}
