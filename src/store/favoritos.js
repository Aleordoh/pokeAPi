import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritosStore = defineStore('favoritos', () => {

  const favoritos = ref([])//estado o referencia reactiva

  const add = (poke) => {//accion
    favoritos.value.push(poke)
    console.log(favoritos.value);
  }
  return {
    favoritos,
    add,
  }
})