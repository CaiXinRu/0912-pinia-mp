<template>
  <div class="counter">
    <div class="counter-card">
      <h2>計數器</h2>

      <div class="counter-display">
        <div class="count">{{ counterStore.count }}</div>
        <div class="count-info">
          <p>雙倍數值: {{ counterStore.doubleCount }}</p>
          <p>是否為偶數: {{ counterStore.isEven ? "是" : "否" }}</p>
        </div>
      </div>

      <div class="counter-controls">
        <button @click="counterStore.decrement" class="btn btn-danger">
          -1
        </button>
        <button @click="counterStore.increment" class="btn btn-primary">
          +1
        </button>
        <button @click="counterStore.incrementBy(5)" class="btn btn-success">
          +5
        </button>
        <button @click="counterStore.reset" class="btn btn-secondary">
          重置
        </button>
      </div>

      <div class="counter-actions">
        <input
          v-model.number="customAmount"
          type="number"
          placeholder="輸入數值"
          class="input"
        />
        <button @click="incrementByCustom" class="btn btn-info">增加</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();
const customAmount = ref<number>(0);

const incrementByCustom = (): void => {
  if (customAmount.value) {
    counterStore.incrementBy(customAmount.value);
    customAmount.value = 0;
  }
};
</script>

<style scoped>
.counter {
  max-width: 600px;
  margin: 0 auto;
}

.counter-card {
  background: white;
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.counter-card h2 {
  margin-bottom: 2rem;
  color: #333;
  font-size: 2rem;
}

.counter-display {
  margin-bottom: 2rem;
}

.count {
  font-size: 4rem;
  font-weight: bold;
  color: #667eea;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.count-info {
  color: #666;
}

.count-info p {
  margin: 0.5rem 0;
  font-size: 1.1rem;
}

.counter-controls {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.counter-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  min-width: 80px;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-danger {
  background: #e74c3c;
  color: white;
}

.btn-success {
  background: #27ae60;
  color: white;
}

.btn-secondary {
  background: #95a5a6;
  color: white;
}

.btn-info {
  background: #3498db;
  color: white;
}

.input {
  padding: 0.75rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  width: 150px;
  text-align: center;
}

.input:focus {
  outline: none;
  border-color: #667eea;
}
</style>
