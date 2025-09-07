<template>
  <div class="todos">
    <div class="todos-header">
      <h2>待辦事項</h2>
      <div class="todo-stats">
        <span>總共: {{ todosStore.totalCount }}</span>
        <span>已完成: {{ todosStore.completedCount }}</span>
        <span
          >未完成: {{ todosStore.totalCount - todosStore.completedCount }}</span
        >
      </div>
    </div>

    <div class="add-todo">
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        type="text"
        placeholder="新增待辦事項..."
        class="todo-input"
      />
      <button @click="addTodo" class="btn btn-primary">新增</button>
    </div>

    <div class="filters">
      <button
        @click="todosStore.setFilter('all')"
        :class="['filter-btn', { active: todosStore.filter === 'all' }]"
      >
        全部
      </button>
      <button
        @click="todosStore.setFilter('active')"
        :class="['filter-btn', { active: todosStore.filter === 'active' }]"
      >
        未完成
      </button>
      <button
        @click="todosStore.setFilter('completed')"
        :class="['filter-btn', { active: todosStore.filter === 'completed' }]"
      >
        已完成
      </button>
    </div>

    <div class="todo-list">
      <div
        v-for="todo in todosStore.filteredTodos"
        :key="todo.id"
        class="todo-item"
        :class="{ completed: todo.completed }"
      >
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="todosStore.toggleTodo(todo.id)"
          class="todo-checkbox"
        />
        <span class="todo-text">{{ todo.text }}</span>
        <button @click="todosStore.deleteTodo(todo.id)" class="delete-btn">
          🗑️
        </button>
      </div>

      <div v-if="todosStore.filteredTodos.length === 0" class="empty-state">
        <p>沒有待辦事項</p>
      </div>
    </div>

    <div v-if="todosStore.completedCount > 0" class="clear-completed">
      <button @click="todosStore.clearCompleted" class="btn btn-secondary">
        清除已完成項目
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTodosStore } from "@/stores/todos";

const todosStore = useTodosStore();
const newTodo = ref<string>("");

const addTodo = (): void => {
  if (newTodo.value.trim()) {
    todosStore.addTodo(newTodo.value.trim());
    newTodo.value = "";
  }
};
</script>

<style scoped>
.todos {
  max-width: 800px;
  margin: 0 auto;
}

.todos-header {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  text-align: center;
}

.todos-header h2 {
  margin-bottom: 1rem;
  color: #333;
  font-size: 2rem;
}

.todo-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  color: #666;
}

.add-todo {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.todo-input {
  flex: 1;
  padding: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}

.todo-input:focus {
  outline: none;
  border-color: #667eea;
}

.filters {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.filter-btn {
  padding: 0.5rem 1rem;
  border: 2px solid #ddd;
  background: white;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-btn.active {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

.todo-list {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.todo-item {
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #eee;
  transition: background-color 0.3s;
}

.todo-item:hover {
  background-color: #f8f9fa;
}

.todo-item:last-child {
  border-bottom: none;
}

.todo-item.completed {
  opacity: 0.6;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
}

.todo-checkbox {
  margin-right: 1rem;
  transform: scale(1.2);
}

.todo-text {
  flex: 1;
  font-size: 1.1rem;
}

.delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.delete-btn:hover {
  background-color: #ffebee;
}

.empty-state {
  padding: 3rem;
  text-align: center;
  color: #666;
}

.clear-completed {
  margin-top: 2rem;
  text-align: center;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-secondary {
  background: #95a5a6;
  color: white;
}
</style>
