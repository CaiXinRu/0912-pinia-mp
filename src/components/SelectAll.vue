<script setup lang="ts">
import { useHomeStore } from "@/stores/home";
import { storeToRefs } from "pinia";
import { onUpdated } from "vue";

const homeStore = useHomeStore();
const { carInfo } = storeToRefs(homeStore);
// const carInfo = computed(() => homeStore.carInfo);

onUpdated(() => {
  homeStore.updateSelectAllRenderCount();
});
</script>

<template>
  <div>
    <h3>Select Completed Object</h3>
    <p>License Plate: {{ carInfo.licensePlate }}</p>
  </div>
</template>
