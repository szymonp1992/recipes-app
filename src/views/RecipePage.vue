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
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();

    const recipeTitle = ref("");
    const recipeShortDescription = ref("");
    const recipeFull = ref("");
    const recipeImageUrl = ref("");

    const recipe = ref({});
    onMounted(async () => {
      await store.dispatch("loadRecipes");
      const recipeId = route.params.id;
      recipe.value = store.getters.getRecipeById(recipeId);
      recipeTitle.value = recipe.value.recipeTitle;
      recipeShortDescription.value = recipe.value.recipeShortDesc;
      recipeFull.value = recipe.value.recipeFullRecipe;
      recipeImageUrl.value = recipe.value.recipeImageUrl;
    });

    return { recipeTitle, recipeShortDescription, recipeFull, recipeImageUrl };
  },
};
</script>