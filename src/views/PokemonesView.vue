<script setup>
import { RouterLink } from "vue-router";
import { useGetData } from "@/composables/getData";

const { getData, data, loading, serverError } = useGetData(); //destructurin de los return de useTGetData
getData("https://pokeapi.co/api/v2/pokemon?limit=10"); //ejecuto la funcion getData extraidas de useGedata con la URL a utilizar
</script>

<template>
  <div class="columns">
    <div class="column">
      <section class="hero has-background-light">
        <div class="hero-body has-text-centered">
          <div class="container content-wrapper">
            <p class="title is-2">Pokemones</p>
            <div v-if="loading" class="notification is-success">
              Cargando...
            </div>
            <div v-if="serverError" class="notification is-danger">
              <button class="delete" @click="back">Volver</button>
              {{ serverError }}
            </div>
            <div class="columns is-multiline" v-if="data">
              <div
                v-for="pokemon in data.results"
                class="column is-4-desktop is-one-fifth-widescreen is-half-tablet"
              >
                <div class="box">
                  <figure class="image is-96x96">
                    <img src="@/assets/pngwing.jpg" />
                  </figure>
                  <p class="subtitle">{{ pokemon.name }}</p>
                  <router-link
                    :to="`/pokemones/${pokemon.name}`"
                    class="button is-success is-small"
                  >
                    Ver Datos
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="hero is-small is-gray">
        <div class="hero-body has-text-centered withButtons">
          <div v-if="data" class="buttons are-small">
            <button
              :disabled="!data.previous"
              @click="getData(data.previous)"
              type="button"
              class="button is-rounded is-link"
            >
              Anterior
            </button>
            <button
              :disabled="!data.next"
              @click="getData(data.next)"
              type="button"
              class="button is-rounded is-link"
            >
              Siguiente
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<style scoped>
.withButtons {
  justify-content: center;
}
.box{
display: flex;
flex-direction: column;
align-items: center;

}
</style>
