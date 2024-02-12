<script setup>
import { useFavoritosStore } from "@/store/favoritos";
import { storeToRefs } from "pinia";
const favoritosStore = useFavoritosStore();
const { favoritos } = storeToRefs(favoritosStore);
</script>

<template>
  <div class="columns">
    <div class="column">
      <section class="hero has-background-light">
        <div class="hero-body has-text-centered">
          <div class="container content-wrapper">
            <p class="title is-2">Pokemones</p>
            <div class="columns is-multiline" v-if="favoritos">
              <div
                v-for="pokemon in favoritos"
                class="column is-4-desktop is-one-fifth-widescreen is-half-tablet"
              >
              <article class="box">
                  <figure class="image">
                     <img :src="pokemon.sprites?.front_default"/>
                  </figure>
                  <p class="subtitle">{{ pokemon.name }}</p>
                </article>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
