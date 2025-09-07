import type { Todo, TodoFilter } from "@/types/todoTypes";
import { defineStore } from "pinia";

interface TodosState {
  todos: Todo[];
  filter: TodoFilter;
}

export const useTodosStore = defineStore("todos", {
  state: (): TodosState => ({
    todos: [
      { id: 1, text: "學習 Vue 3", completed: false },
      { id: 2, text: "學習 Pinia", completed: true },
      { id: 3, text: "建立專案", completed: false },
    ],
    filter: "all",
  }),

  getters: {
    filteredTodos: (state): Todo[] => {
      switch (state.filter) {
        case "active":
          return state.todos.filter((todo) => !todo.completed);
        case "completed":
          return state.todos.filter((todo) => todo.completed);
        default:
          return state.todos;
      }
    },

    completedCount: (state): number =>
      state.todos.filter((todo) => todo.completed).length,

    totalCount: (state): number => state.todos.length,
  },

  actions: {
    addTodo(text: string): void {
      const newTodo: Todo = {
        id: Date.now(),
        text,
        completed: false,
      };
      this.todos.push(newTodo);
    },

    toggleTodo(id: number): void {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    deleteTodo(id: number): void {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },

    setFilter(filter: TodoFilter): void {
      this.filter = filter;
    },

    clearCompleted(): void {
      this.todos = this.todos.filter((todo) => !todo.completed);
    },
  },
});
