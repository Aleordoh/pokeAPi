import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritosStore = defineStore('favoritos', () => {

  const favoritos = ref([])//estado o referencia reactiva

  const add = (poke) => {//accion
    favoritos.value.push(poke)
  }

  const removeFav = (id) => {
    favoritos.value = favoritos.value.filter((item) => item.id !== id)
  }
  return {
    favoritos,
    add,
    removeFav,
  }
})