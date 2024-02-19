<script setup>
import { useRoute, useRouter } from "vue-router";
import { useGetData } from "@/composables/getData";
import { useFavoritosStore } from "@/store/favoritos";

const route = useRoute(); //useRoute permite acceder a los parametros de la ruta
const router = useRouter();

const { getData, data, loading, serverError } = useGetData(); //instancio al composable  useGetData
const favoritosStore = useFavoritosStore(); //instancio useFavoritosSto
const { add, bloqFavBtn } = favoritosStore;

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);

const back = () => {
  router.push("/pokemones");
};
</script>

<template>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <section class="hero has-background-light">
        <div class="hero-body has-text-centered">
          <div class="container content-wrapper">
            <div v-if="loading" class="notification is-success">
              <p>Cargando...</p>
            </div>
            <div v-if="serverError" class="notification is-danger">
              <button class="delete" @click="back">Volver</button>
              <p>El pokemon solicitado no existe...</p>
            </div>
            <section v-if="data" class="hero is-primary">
              <div class="hero-body">
                <div class="container">
                  <div class="box">
                    <p class="subtitle is-3 has-text-black">
                      {{ data.name }}
                    </p>
                    <article class="media">
                      <div class="media-left">
                        <figure class="image is-128x128">
                          <img :src="data.sprites?.front_default" alt="Image" />
                        </figure>
                      </div>
                      <div class="media-content">
                        <div class="content">
                          <div class="has-text-left">
                            <p>Experiencia: {{ data.base_experience }}</p>

                            <p class="mb-0">Tipo:</p>
                            <ol class="poke mt-0">
                              <li v-for="slot in data.types">
                                {{ slot.type.name }}
                                <br />
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </article>
                    <div class="media footer-box">
                      <div class="buttons">
                        <button
                          @click="back"
                          class="button is-rounded level-item "
                          aria-label="reply"
                        >
                          <span class="icon has-text-success">
                            <i class="fas fa-reply" aria-hidden="true"></i>
                          </span>
                        </button>
                        <button
                          @click="add(data)"
                          :disabled="bloqFavBtn(data.name)"
                          class="button is-rounded level-item"
                          aria-label="like"
                        >
                          <span class="icon has-text-danger">
                            <i class="fas fa-heart" aria-hidden="true"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
ol.poke {
  text-align: left;
}
.footer-box {
  justify-content: center;
}
</style>
