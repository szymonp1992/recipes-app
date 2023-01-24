<template>
  <div>
    <div class="container">
      <div class="row justify-content-between m-0">
        <router-link class="btn btn-dark mb-4 col-2" to="/recipes/"
          >Back to all recipes</router-link
        >
        <button class="btn btn-danger mb-4 col-2" @click="deleteRecipe">
          Delete recipe
        </button>
      </div>

      <div class="row gx-3 gy-3">
        <div class="col-12 col-md-8">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title mb-3">{{ recipeTitle }}</h4>
              <h5 class="card-subtitle mb-3">{{ recipeShortDescription }}</h5>
              <p class="card-text" v-html="recipeFull"></p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="card">
            <img
              :src="recipeImageUrl"
              class="card-img-top recipe-photo"
              :alt="recipeTitle"
              v-if="recipeImageUrl"
            />
            <h4 v-else class="p-3 text-muted">No image to display</h4>
          </div>
        </div>
      </div>
    </div>
    <TheBackdrop :style="{ display: isLoading ? 'block' : 'none' }" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

import TheBackdrop from "../components/TheBackdrop.vue";

export default {
  components: {
    TheBackdrop,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const recipeTitle = ref("");
    const recipeShortDescription = ref("");
    const recipeFull = ref("");
    const recipeImageUrl = ref("");
    const recipeKey = ref("");

    const isLoading = ref(false);

    const recipe = ref({});
    onMounted(async () => {
      isLoading.value = true;
      await store.dispatch("loadRecipes");
      const recipeId = route.params.id;
      recipe.value = store.getters.getRecipeById(recipeId);
      recipeTitle.value = recipe.value.recipeTitle;
      recipeShortDescription.value = recipe.value.recipeShortDesc;
      recipeFull.value = recipe.value.recipeFullRecipe;
      recipeImageUrl.value = recipe.value.recipeImageUrl;
      recipeKey.value = recipe.value.recipeKey;
      isLoading.value = false;
    });

    function deleteRecipe() {
      if (confirm("Are you sure?")) {
        store.dispatch("removeRecipe", {
          recipeKey: recipeKey.value,
          recipeId: route.params.id,
        });
        router.push({ path: "/" });
      }
    }

    return {
      recipeTitle,
      recipeShortDescription,
      recipeFull,
      recipeImageUrl,
      isLoading,
      deleteRecipe,
    };
  },
};
</script>

<style scoped>
</style>