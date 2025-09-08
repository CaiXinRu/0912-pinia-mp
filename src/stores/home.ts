import type { HomeState } from "@/types/homeTypes";
import { defineStore } from "pinia";

export const useHomeStore = defineStore("home", {
  state: (): HomeState => ({
    carInfo: {
      licensePlate: "MP",
      carBrand: "LAMBORGHINI",
    },
    selectAllRenderCount: 0,
    selectOneRenderCount: 0,
  }),

  getters: {},

  actions: {
    updateLicensePlate(newLicensePlate: string): void {
      this.carInfo = { ...this.carInfo, licensePlate: newLicensePlate };
    },
    updateCarBrand(newBrand: string): void {
      this.carInfo = { ...this.carInfo, carBrand: newBrand };
    },
    updateSelectAllRenderCount(): void {
      this.selectAllRenderCount++;
    },
    updateSelectOneRenderCount(): void {
      this.selectOneRenderCount++;
    },
  },
});
