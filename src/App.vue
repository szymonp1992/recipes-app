<template>
  <div class="container  ">
    <nav class="navbar sticky-top navbar-expand-lg bg-light p-0" data-bs-theme="light">
      <div class="container-fluid p-0">
        <RouterLink class="navbar-brand" to="/"><img src="./assets/logo.png" alt="My best recipes logo" height="70"
            class="me-3"></RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
          aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end" style="width: 100%">
            <li class="nav-item fs-5 m-3">
              <RouterLink class="nav-link" to="/">Recipes</RouterLink>
            </li>
            <li class="nav-item fs-5 m-3">
              <RouterLink class="nav-link" to="/about">Add new recipe</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container mt-4">
      <RouterView />
    </div>
  </div>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped>

</style>

