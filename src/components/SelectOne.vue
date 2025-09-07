<script setup lang="ts">
import { useHomeStore } from "@/stores/home";
import { computed, onUpdated } from "vue";

const homeStore = useHomeStore();
const licensePlate = computed(() => homeStore.carInfo.licensePlate);

onUpdated(() => {
  homeStore.updateSelectOneRenderCount();
  console.log("CatchOne re-render:", homeStore.selectOneRenderCount);
});
</script>

<template>
  <div>
    <h3>Catch only one Information</h3>
    <p>License Plate: {{ licensePlate }}</p>
  </div>
</template>
