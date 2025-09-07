<script setup lang="ts">
import { useHomeStore } from "@/stores/home";
import { computed, onUpdated } from "vue";

const homeStore = useHomeStore();
const licensePlate = computed(() => homeStore.carInfo.licensePlate);

onUpdated(() => {
  homeStore.updateCatchOneRenderCount();
  console.log("CatchOne re-render:", homeStore.catchOneRenderCount);
});
</script>

<template>
  <div class="p-2 border">
    <h3>Catch only one Information</h3>
    <p>License Plate: {{ licensePlate }}</p>
  </div>
</template>
