<script setup>
import { RouterLink } from "vue-router";
import { useGetData } from "@/composables/getData";

const { getData, data, loading, serverError } = useGetData(); //destructurin de los return de useTGetData
getData("https://pokeapi.co/api/v2/pokemon"); //ejecuto la funcion getData extraidas de useGedata con la URL a utilizar
</script>

<template>
  <section class="section">
    <div class="container">
      <p class="title is-2">Pokemones</p>
      <div v-if="loading" class="notification is-success">Cargando...</div>
      <div v-if="serverError" class="notification is-danger">
        <button class="delete" @click="back">Volver</button>
        {{ serverError }}
      </div>
    </div>
    <div v-if="data" class="section">
      <ul>
        <li v-for="pokemon in data.results">
          <router-link :to="`/pokemones/${pokemon.name}`">
            {{ pokemon.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <div v-if="data" class="buttons are-small">
      <button
        :disabled="!data.previous"
        @click="getData(data.previous)"
        type="button"
        class="button is-success is-rounded"
      >
        Anterior
      </button>
      <button
        :disabled="!data.next"
        @click="getData(data.next)"
        type="button"
        class="button is-success is-rounded"
      >
        Siguiente
      </button>
    </div>
  </section>
</template>
