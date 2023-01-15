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
          :key="recipe.id"
          :recipe-id="recipe.id"
          :title="recipe.title"
          :short-description="recipe.shortDescription"
          :image-url="recipe.imageUrl"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

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
    return { allRecipes };
  },
};
</script>