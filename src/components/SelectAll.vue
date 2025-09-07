<script setup lang="ts">
import { useHomeStore } from "@/stores/home";
import { storeToRefs } from "pinia";
import { onUpdated } from "vue";

const homeStore = useHomeStore();
const { carInfo } = storeToRefs(homeStore);
// const carInfo = computed(() => homeStore.carInfo);

onUpdated(() => {
  homeStore.updateSelectAllRenderCount();
  console.log("CatchAll re-render:", homeStore.selectAllRenderCount);
});
</script>

<template>
  <div>
    <h3>Catch Completed Information</h3>
    <p>License Plate: {{ carInfo.licensePlate }}</p>
  </div>
</template>
