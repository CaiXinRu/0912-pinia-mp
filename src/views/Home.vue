<template>
  <div class="home">
    <div class="hero">
      <h2>歡迎來到 Vue + Pinia 專案</h2>
      <p>這是一個使用 Vue 3 和 Pinia 狀態管理建立的示範專案</p>
    </div>

    <h1>Car Brand: {{ homeStore.carInfo.carBrand }}</h1>
    <br />
    <CatchAll />
    <p>CatchAll re-render: {{ catchAllRenderCount }}</p>
    <br />
    <CatchOne />
    <p>CatchOne re-render: {{ catchOneRenderCount }}</p>
    <br />
    <div class="flex gap-2">
      <button
        @click="
          homeStore.updateLicensePlate('MP' + Math.floor(Math.random() * 100))
        "
      >
        Adjust License Plate
      </button>
      <button
        @click="
          homeStore.updateCarBrand(
            'LAMBORGHINI Ver.' + Math.floor(Math.random() * 100)
          )
        "
      >
        Adjust Car Brand
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import CatchAll from "@/components/catchAll.vue";
import CatchOne from "@/components/catchOne.vue";
import { useHomeStore } from "@/stores/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();
const { catchAllRenderCount, catchOneRenderCount } = storeToRefs(homeStore);
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 15px;
}

.hero h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.hero p {
  font-size: 1.2rem;
  color: #666;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.feature-card p {
  color: #666;
}

.quick-stats {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.quick-stats h3 {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
}

.stat {
  text-align: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #666;
  font-size: 0.9rem;
}
</style>
