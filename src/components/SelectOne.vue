<script setup lang="ts">
import { useHomeStore } from "@/stores/home";
import { computed, onUpdated } from "vue";

const homeStore = useHomeStore();
const licensePlate = computed(() => homeStore.carInfo.licensePlate);

onUpdated(() => {
  homeStore.updateSelectOneRenderCount();
});
</script>

<template>
  <div class="component-card tech-card">
    <h3>Select Single Property</h3>
    <div class="data-display">License Plate: {{ licensePlate }}</div>
    <div class="component-info">
      <span class="info-badge">Single Property Selection</span>
    </div>
  </div>
</template>
