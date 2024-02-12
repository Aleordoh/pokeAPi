<script setup>
import { storeToRefs } from "pinia";
import TheWelcome from "../components/TheWelcome.vue";
import { useCounterStore } from "../store/counter";
const useCounter = useCounterStore();

//hacer destructuring  permite tener el codigo mas limpio. Si no se usa se debe usar tienda.propiedad como por ejmeplo en double.
const { increment } = useCounter; //destructuramos la accion
const{count}= storeToRefs(useCounter) //Para extraer propiedades de la tienda manteniendo su reactividad, debe usar storeToRefs().
</script>

<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <p class="title">Counter: {{ count }}</p>
        <p class="title">Doble: {{ useCounter.double }}</p>
        <button class="button" @click="increment">Incrementar</button>
        <!--         <TheWelcome /> -->
      </div>
    </div>
  </section>
</template>
