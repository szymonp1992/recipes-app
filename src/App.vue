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

export default {
  components: {
    TheNavbar,
    RouterView,
  },
};
</script>

<style>
* {
  font-family: Roboto, Arial, sans-serif;
}
</style>

