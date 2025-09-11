<script setup lang="ts">
import { useHomeStore } from "@/stores/home";
import { computed, onUpdated } from "vue";

const homeStore = useHomeStore();
// const { carInfo } = storeToRefs(homeStore);
const carInfo = computed(() => homeStore.carInfo);

onUpdated(() => {
  homeStore.updateSelectAllRenderCount();
});
</script>

<template>
  <div class="component-card tech-card">
    <h3>Select Completed Object</h3>
    <div class="data-display">License Plate: {{ carInfo.licensePlate }}</div>
    <div class="component-info">
      <span class="info-badge">Full Object Selection</span>
    </div>
  </div>
</template>
