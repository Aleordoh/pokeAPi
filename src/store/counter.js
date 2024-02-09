import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  const increment = () => count.value++//metodo

  const double = computed(() => count.value * 2)//computed solo muestra la variable transformada paro no la modifica
  
  return {
    count,
    increment,
    double,
  }
})