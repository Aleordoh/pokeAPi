import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritosStore = defineStore('favoritos', () => {

  //estado o referencia reactiva
  const favoritos = ref([])

  //metodo agrega pokemon al array favoritos y a localStorage
  //localStorage es una BD en el navegador al cambiar de navegador se pierde la info y todo se debe guardar como texto
  const add = (poke) => {
    favoritos.value.push(poke)
    localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
  }

  //metodo para eliminar un pokemon de favoritos y del localStorage
  const removeFav = (id) => {
    favoritos.value = favoritos.value.filter((item) => item.id !== id)
    localStorage.setItem('favoritos', JSON.stringify(favoritos.value))//guarda el nuevo arrya en localStorage
  }

  //metodo que lee si ya exixte info en localStorage y reemplaza el valor de favortos con el de localStorage
  if (localStorage.getItem('favoritos')) {
    favoritos.value = JSON.parse(localStorage.getItem('favoritos'))
  }

  //metodo para buscar un pokemon por nombre en favoritos si ya esxixte se debe bloquear el botom
  const bloqFavBtn = name => favoritos.value.find(item => item.name === name)

  return {
    favoritos,
    add,
    removeFav,
    bloqFavBtn,
  }
})