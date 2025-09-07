import type { HomeState } from "@/types/homeTypes";
import { defineStore } from "pinia";

export const useHomeStore = defineStore("home", {
  state: (): HomeState => ({
    carInfo: {
      licensePlate: "MP",
      carBrand: "LAMBORGHINI",
    },
    catchAllRenderCount: 0,
    catchOneRenderCount: 0,
  }),

  getters: {},

  actions: {
    updateLicensePlate(newLicensePlate: string): void {
      this.carInfo.licensePlate = newLicensePlate;
    },
    updateCarBrand(newBrand: string): void {
      this.carInfo = { ...this.carInfo, carBrand: newBrand };
    },
    updateCatchAllRenderCount(): void {
      this.catchAllRenderCount++;
    },
    updateCatchOneRenderCount(): void {
      this.catchOneRenderCount++;
    },
  },
});
