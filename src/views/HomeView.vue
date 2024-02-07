<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { useCounterStore } from '../store/counter';
const useCounter = useCounterStore()
</script>

<template>
  <main>
    <TheWelcome />
  </main>
  <p class="title">Home Counter{{ useCounter.count }}</p>
  <a class="button">Incrementar </a>
</template>
