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
  <div>
    <h3>Select Single Property</h3>
    <p>License Plate: {{ licensePlate }}</p>
  </div>
</template>
