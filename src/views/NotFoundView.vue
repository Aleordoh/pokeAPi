<script setup></script>
<template>
  <div class="container">
    <div
      class="is-flex is-justify-content-center is-align-items-center"
      style="height: 100vh"
    >
      <div class="columns">
        <div class="is-half mr-5 mb-5">
          <img src="@/assets/404.png" alt="404 svg image" />
        </div>
        <div class="has-text-centered is-half ml-4 mt-5">
          <h1 class="is-size-1 has-text-weight-bold has-text-primary">404</h1>
          <p class="is-size-5 has-text-weight-medium">
            <span class="has-text-danger">Opps!</span> Page not found.
          </p>
          <p class="is-size-6 mb-2">
            The page you’re looking for doesn’t exist.
          </p>
          <router-link to="/" class="button is-primary">Go Home</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
