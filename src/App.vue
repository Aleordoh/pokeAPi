<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <nav
    id="mainNav"
    class="navbar staticBar is-fixed-top is-info"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/#">
        <img src="@/assets/logo.svg" alt="" width="122" class="vueIcon" />
      </router-link>
      <span class="navbar-burger burger">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>
    <div id="navbarMenu" class="navbar-menu">
      <div class="navbar-end">
        <router-link class="navbar-item" to="/"> Home </router-link>
        <router-link class="navbar-item" to="/about"> About </router-link>
        <router-link class="navbar-item" to="/pokemones">Pokemon</router-link>
        <router-link class="navbar-item" to="/favoritos">Favoritos</router-link>
      </div>
    </div>
  </nav>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <RouterView />
    </div>
  </section>
</template>

<style scoped>
.vueIcon {
  max-height: 2.75rem;
}
</style>
