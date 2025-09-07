import type { CounterState } from "@/types/counterTypes";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: (): CounterState => ({
    count: 0,
  }),

  getters: {
    doubleCount: (state): number => state.count * 2,
    isEven: (state): boolean => state.count % 2 === 0,
  },

  actions: {
    increment(): void {
      this.count++;
    },

    decrement(): void {
      this.count--;
    },

    reset(): void {
      this.count = 0;
    },

    incrementBy(amount: number): void {
      this.count += amount;
    },
  },
});
