<template>
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
    <TheBackdrop :style="{ display: isLoading ? 'block' : 'none' }" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed, onMounted } from "vue";

import RecipeCard from "../components/RecipeCard.vue";
import TheBackdrop from "../components/TheBackdrop.vue";

export default {
  components: {
    RecipeCard,
    TheBackdrop,
  },
  setup() {
    const store = useStore();

    const allRecipes = computed(() => {
      return store.getters.allRecipes;
    });

    const isLoading = ref(false);

    async function showSpinner() {
      isLoading.value = true;
      await store.dispatch("loadRecipes");
      isLoading.value = false;
    }

    onMounted(() => {
      showSpinner();
    });

    return { allRecipes, isLoading };
  },
};
</script>