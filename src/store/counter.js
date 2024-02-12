import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0) //estado o referencia reactiva

  const increment = () => count.value++//accion

  const double = computed(() => count.value * 2)//computed solo muestra la variable transformada paro no la modifica
  
  return { //retornamos lo anterior
    count,
    increment,
    double,
  }
})