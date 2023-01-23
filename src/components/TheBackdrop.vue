<template>
  <div>
    <div class="backdrop"></div>
    <TheSpinner />
  </div>
</template>

<script>
import TheSpinner from "./TheSpinner.vue";

export default {
  components: {
    TheSpinner,
  },
};
</script>


<style scoped>
.backdrop {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: grey;
  z-index: 1100;
  opacity: 0.3;
}
</style>