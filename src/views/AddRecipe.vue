<template>
  <div class="container">
    <form>
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="recipeTitle" placeholder="Recipe title" v-model="recipeTitle">
        <label for="recipeTitle">Recipe title</label>
      </div>
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="recipeShortDescription" placeholder="Short description"
          v-model="recipeShortDescription">
        <label for="recipeShortDescription">Short description</label>
      </div>
      <div class="form-floating mb-3">
        <textarea class="form-control" id="fullRecipe" placeholder="Full recipe" style="height: 400px"
          v-model="fullRecipe"></textarea>
        <label for="fullRecipe">Full recipe</label>
      </div>
      <div class="mb-3">
        <input type="file" class="form-control" id="recipePic" placeholder="Recipe photo" accept=".jpg, .png">
      </div>
      <button type="submit" class="btn btn-dark" @click="submitRecipe">Add recipe to the database</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'

import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore();

    const recipeTitle = ref('');
    const recipeShortDescription = ref('');
    const fullRecipe = ref('');

    function submitRecipe(e) {

      e.preventDefault();
      store.dispatch('addNewRecipe', {
        id: store.getters.allRecipes.length + 1,
        title: recipeTitle.value,
        shortDescription: recipeShortDescription.value,
        fullRecipe: fullRecipe.value,
      })
      recipeTitle.value = ''
      recipeShortDescription.value = ''
      fullRecipe.value = ''
    }

    return { recipeTitle, recipeShortDescription, fullRecipe, submitRecipe }
  }
}
</script>