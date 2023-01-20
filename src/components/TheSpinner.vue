<template>
  <div class="spinner-canvas">
    <div class="spinner-border text-secondary" role="status">
      <span class="sr-only"></span>
    </div>
  </div>
</template>

<style>
.spinner-canvas {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.spinner-border {
  height: 10rem;
  width: 10rem;
  border-width: 1rem;
}
</style>