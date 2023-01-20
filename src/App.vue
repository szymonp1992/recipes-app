<template>
  <div class="container">
    <TheNavbar />
  </div>
  <div class="container mt-5">
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import TheNavbar from "./components/TheNavbar.vue";
import TheSpinner from "./components/TheSpinner.vue";

export default {
  components: {
    TheNavbar,
    TheSpinner,
    RouterView,
  },
};
</script>

<style>
* {
  font-family: Roboto, Arial, sans-serif;
}
</style>

