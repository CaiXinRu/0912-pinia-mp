<template>
  <div>
    <div>
      <h1>The Magic we Pinia is now!</h1>
      <p>Mastering Pinia’s Charm for Instant State Magic</p>
    </div>

    <h2>Car Brand: {{ homeStore.carInfo.carBrand }}</h2>
    <SelectAll />
    <p>SelectAll re-render: {{ selectAllRenderCount }}</p>
    <br />
    <SelectOne />
    <p>SelectOne re-render: {{ selectOneRenderCount }}</p>
    <br />
    <div>
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
import SelectAll from "@/components/SelectAll.vue";
import SelectOne from "@/components/SelectOne.vue";
import { useHomeStore } from "@/stores/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();
const { selectAllRenderCount, selectOneRenderCount } = storeToRefs(homeStore);
</script>
