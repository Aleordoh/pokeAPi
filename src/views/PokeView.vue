<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute(); //useRoute permite acceder a los parametros de la ruta
const router = useRouter();
const url = `https://pokeapi.co/api/v2/pokemon/${route.params.name}`;
const poke = ref({});
const back = () => {
  router.push("/pokemones");
};

const getData = async () => {
  try {
    const { data } = await axios.get(url);
    poke.value = data;
  } catch (error) {
    console.error(error);
    poke.value = null;
  }
};
onMounted(() => getData());
</script>

<template>
  <section class="section">
    <div v-if="poke">
      <div class="container">
        <figure class="image is-128x128">
          <img :src="poke.sprites?.front_default" alt="" height="250" />
        </figure>
        <ul class="mb-5">
          <li><span style="font-weight: bold;">Name: </span>{{ poke.name }}</li>
          <li class="mt-2"><span style="font-weight: bold">Experiencia:</span> {{ poke.base_experience }}</li>
        </ul>
        <div>
          <button class="button is-warning is-small is-rounded" @click="back">Volver</button>
        </div>
      </div>
    </div>
    <div v-else>
      <h2 class="title is-3">No existe el Pokemon</h2>
      <button @click="back" class="button is-danger">Volver</button>
    </div>
  </section>
</template>
