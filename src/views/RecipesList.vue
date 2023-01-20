<template>
  <div>
    <div class="container">
      <div
        class="
          row
          gx-3
          gy-3
          row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4
        "
      >
        <RecipeCard
          v-for="recipe in allRecipes"
          :key="recipe.recipeId"
          :recipe-id="recipe.recipeId"
          :title="recipe.recipeTitle"
          :short-description="recipe.recipeShortDesc"
          :image-url="recipe.recipeImageUrl"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

import RecipeCard from "../components/RecipeCard.vue";

export default {
  components: {
    RecipeCard,
  },
  setup() {
    const store = useStore();

    const allRecipes = computed(() => {
      return store.getters.allRecipes;
    });

    onMounted(() => {
      store.dispatch("loadRecipes");
    });
    return { allRecipes };
  },
};
</script>