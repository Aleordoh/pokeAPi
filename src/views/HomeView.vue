<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import { useCounterStore } from "../store/counter";
const useCounter = useCounterStore();
 
</script>

<template>
  <main>
    <p class="title">Counter{{ useCounter.count }}</p>
    <p class="title">Doble{{ useCounter.double }}</p>
    <button class="button" @click="useCounter.increment">Incrementar</button>
   <!--  <TheWelcome /> -->
  </main>

</template>
