<template>
  <div id="app" class="home-container fade-in-up">
    <div class="hero-section">
      <h1>
        The <span class="large-letter">M</span>agic we
        <span class="large-letter">P</span>inia is now!
      </h1>
      <p class="hero-subtitle">
        Mastering Pinia's Charm for Instant State Magic
      </p>
      <div class="tech-line"></div>
    </div>

    <div class="tech-card">
      <h2>Car Brand: {{ homeStore.carInfo.carBrand }}</h2>
    </div>

    <div class="components-section">
      <div class="component-wrapper slide-in-left">
        <SelectAll />
        <div class="counter">
          Re-render times:
          <span class="counter-number">{{ selectAllRenderCount }}</span>
        </div>
      </div>

      <div class="component-wrapper slide-in-right">
        <SelectOne />
        <div class="counter">
          Re-render times:
          <span class="counter-number">{{ selectOneRenderCount }}</span>
        </div>
      </div>
    </div>

    <div class="controls-section">
      <h3>State Control Panel</h3>
      <div class="button-group">
        <button
          class="tech-button"
          @click="
            homeStore.updateLicensePlate('MP' + Math.floor(Math.random() * 100))
          "
        >
          Adjust License Plate
        </button>
        <button
          class="tech-button"
          @click="
            homeStore.updateCarBrand(
              `LAMBOR-Ver.${Math.floor(Math.random() * 100)}-GHINI`
            )
          "
        >
          Adjust Car Brand
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SelectAll from "@/components/SelectAll.vue";
import SelectOne from "@/components/SelectOne.vue";
import { useHomeStore } from "@/stores/home";
import "@/styles/tech-theme.css";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();
const { selectAllRenderCount, selectOneRenderCount } = storeToRefs(homeStore);
</script>
