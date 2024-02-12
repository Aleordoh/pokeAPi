<script setup>
import { useRoute, useRouter } from "vue-router";
import { useGetData } from "@/composables/getData";
import { useFavoritosStore } from "@/store/favoritos";

const route = useRoute(); //useRoute permite acceder a los parametros de la ruta
const router = useRouter();

const { getData, data, loading, serverError } = useGetData(); //instancio al composable  useGetData
const favoritosStore = useFavoritosStore()//instancio useFavoritosSto
const {add} = favoritosStore

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);

const back = () => {
  router.push("/pokemones");
};
</script>

<template>
  <section class="hero">
    <div class="container">
      <div v-if="loading" class="notification is-success">Cargando...</div>
      <div v-if="serverError" class="notification is-danger">
        <button class="delete" @click="back">Volver</button>
        El pokemon solicitado no existe...
      </div>
      <div v-if="data">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">{{ data.name }}</p>
            <button class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </header>
          <div class="box">
            <figure class="image is-128x128">
              <img :src="data.sprites?.front_default" alt="" height="" />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <div>
                <p class="poke">Experiencia:</p>
                <ul class="poke">
                  <li>
                    {{ data.base_experience }}
                  </li>
                </ul>
              </div>
              <br />
              <div>
                <p class="poke">Tipo:</p>
                <ul class="poke">
                  <li v-for="slot in data.types">
                    {{ slot.type.name }}
                    <br />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <footer class="card-footer">
            <div class="buttons">
              <a class="button is-link is-small is-outlined" @click="back">
                Volver
              </a>
              <a class="button is-link is-small is-outlined" @click="add(data)">
                Add Favorito
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
p.poke {
  font-weight: bold;
  margin-bottom: 0px;
}
ul.poke {
  margin-top: 0px;
}
</style>
