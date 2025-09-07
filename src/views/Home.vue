<template>
  <div>
    <div>
      <h2>歡迎來到 Vue + Pinia 專案</h2>
      <p>這是一個使用 Vue 3 和 Pinia 狀態管理建立的示範專案</p>
    </div>

    <h1>Car Brand: {{ homeStore.carInfo.carBrand }}</h1>
    <br />
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
