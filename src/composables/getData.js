//el composable es como el hook de react en este caso sirve para recivlar el codigo de la API en PoekemonesView y PokeView
import { ref } from "vue"

export const useGetData = () => {
  const data = ref(null)
  const loading = ref(true)// indica el principio de la carga de la API
  const serverError = ref()

  const getData = async (url) => {
    loading.value = true
    try {
      const res = await fetch(url)
      data.value = await res.json()

    } catch (error) {
      serverError.value = "UPS... algo salio mal"
      console.error(error)

    } finally {
      loading.value = false // indica el fin de la carga de la API
    }
  }
  return {
    getData,
    data,
    loading,
    serverError
  }
}
