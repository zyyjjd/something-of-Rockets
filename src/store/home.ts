/*
 * @Date: 2023-04-03 10:48:54
 * @LastEditTime: 2023-04-03 10:52:42
 * @FilePath: /Rockets/src/store/home.ts
 * @Description:
 *
 */
import { defineStore } from "pinia";
import { Names } from "./store-namespace";

export const useHomeStore = defineStore(Names.Home, {
  state: () => ({
    mainTitle: "Acme Rockets",
    firstSmallTitle: "Rockets",
    secondSmallTitle: "Testimonials",
    thirdSmallTitle: "Contact us",
    show: false,
  }),
  getters: {},
  actions: {
    toggleShow(): void {
      this.show = !this.show;
    },
  },
});
