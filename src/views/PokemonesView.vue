<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";

const url = "https://pokeapi.co/api/v2/pokemon";
const pokemons = ref([]);

onMounted(() => getData());

const getData = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    pokemons.value = data.results;
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <section class="section">
    <div class="container">
      <p class="title is-2">Pokemones</p>
      <ul>
        <li v-for="pokemon in pokemons">
          <router-link :to="`/pokemones/${pokemon.name}`">
            {{ pokemon.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>
