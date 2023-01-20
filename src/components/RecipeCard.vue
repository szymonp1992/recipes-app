<template>
  <div class="col">
    <div class="card">
      <img
        :src="imageUrl"
        class="card-img-top recipe-photo"
        :alt="title"
        v-if="imageUrl"
      />
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ shortDescription }}</p>
        <router-link class="btn btn-dark" :to="'/recipes/' + recipeId"
          >Full recipe</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "short-description", "image-url", "recipeId"],
  setup() {},
};
</script>