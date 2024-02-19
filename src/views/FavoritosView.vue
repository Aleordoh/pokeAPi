<script setup>
import { useFavoritosStore } from "@/store/favoritos";
import { storeToRefs } from "pinia";
//import { RouterLink } from "vue-router";


const favoritosStore = useFavoritosStore();
const { favoritos } = storeToRefs(favoritosStore); //solo las propiedades computadas (computed) o los datos reactivos se extraesn con storeToRef
const { removeFav } = favoritosStore;
</script>

<template>
  <div class="columns">
    <div class="column">
      <section class="hero has-background-light">
        <div class="hero-body has-text-centered">
          <div class="container content-wrapper">
            <p class="title is-2">Favoritos</p>
            <div v-if="favoritos.length == 0" class="notification is-warning">
              <p>No has agregado ningun Pokemon a Favoritos</p>
            </div>
            <div class="columns is-multiline" v-if="favoritos">
              <div
                v-for="pokemon in favoritos"
                class="column is-4-desktop is-one-fifth-widescreen is-half-tablet"
              >
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img
                        :src="pokemon.sprites?.front_default"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-content">
                        <p class="title is-4">{{ pokemon.name }}</p>
                      </div>
                    </div>
                  </div>
                  <footer class="card-footer">
                    <div class="buttons">
                      <button
                        @click="removeFav(pokemon.id)"
                        class="button is-danger is-small card-footer-item"
                      >
                        Quitar
                      </button>
                      <router-link
                        :to="`/pokemones/${pokemon.name}`"
                        class="button is-info is-small card-footer-item"
                      >
                        Más Informacion
                      </router-link>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<style scoped>
.card-footer {
  justify-content: center;
}
</style>
