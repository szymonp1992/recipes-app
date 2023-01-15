<template>
  <router-link class="btn btn-dark mb-4" to="/recipes/"
    >Back to all recipes</router-link
  >
  <div class="row gx-3 gy-3">
    <div class="col-12 col-md-8">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title mb-3">{{ recipeTitle }}</h4>
          <h5 class="card-subtitle mb-3">{{ recipeShortDescription }}</h5>
          <p class="card-text">{{ recipeFull }}</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-4">
      <div class="card">
        <img
          :src="recipeImageUrl"
          class="card-img-top recipe-photo"
          :alt="recipeTitle"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const recipeId = route.params.id;
    const recipe = ref(store.getters.getRecipeById(parseInt(recipeId)));

    const recipeTitle = recipe.value.title;
    const recipeShortDescription = recipe.value.shortDescription;
    const recipeFull = recipe.value.fullRecipe;
    const recipeImageUrl = recipe.value.imageUrl;

    return { recipeTitle, recipeShortDescription, recipeFull, recipeImageUrl };
  },
};
</script>