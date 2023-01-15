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
        <input type="file" class="form-control" id="recipePic" placeholder="Recipe photo" accept=".jpg, .png"
          @change="onFilePicked">
      </div>
      <div class="mb-3 image-preview" :style="imageUrl ? 'display: block' : 'display: none'">
        <img :src="imageUrl">
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

    // Recipe properties
    const recipeTitle = ref('');
    const recipeShortDescription = ref('');
    const fullRecipe = ref('');
    const imageUrl = ref('');
    const image = ref('')

    // Recipe submission function
    function submitRecipe(e) {
      e.preventDefault();
      store.dispatch('addNewRecipe', {
        // Id created by incrementing number of recipes. This way every recipe gets new ID - ID of last recipe + 1
        id: store.getters.allRecipes.length + 1,
        title: recipeTitle.value,
        shortDescription: recipeShortDescription.value,
        fullRecipe: fullRecipe.value,
        imageUrl: imageUrl.value,
      })
      // Clearing all the inputs after submitting new recipe
      recipeTitle.value = ''
      recipeShortDescription.value = ''
      fullRecipe.value = ''
      imageUrl.value = ''
    }
    // Function triggered after picking an image to upload
    function onFilePicked(event) {
      const files = event.target.files;
      let filename = files[0].name;
      // Guard to prevent adding a files with a dot in filename
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file')
      }
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        imageUrl.value = fileReader.result
      })
      fileReader.readAsDataURL(files[0]);
      image.value = files[0]
    }

    return { recipeTitle, recipeShortDescription, fullRecipe, imageUrl, submitRecipe, onFilePicked }
  }
}
</script>

<style>
.image-preview {
  border: 2px solid black;
  width: fit-content;
}

.image-preview img {
  height: 200px;
  width: auto;
}
</style>