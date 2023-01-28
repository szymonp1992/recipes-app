<template>
  <div>
    <div class="container">
      <form class="needs-validation" novalidate>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="recipeTitle"
            placeholder="Recipe title"
            v-model="recipeTitle"
            required
          />
          <label for="recipeTitle">Recipe title</label>
          <div class="invalid-feedback">Please enter recipe title.</div>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="recipeShortDescription"
            placeholder="Short description"
            v-model="recipeShortDescription"
            required
          />
          <label for="recipeShortDescription">Short description</label>
          <div class="invalid-feedback">
            Please enter short description of a recipe.
          </div>
        </div>
        <div class="form-floating mb-3">
          <textarea
            class="form-control"
            id="fullRecipe"
            placeholder="Full recipe"
            style="height: 400px"
            v-model="fullRecipe"
            required
          >
          </textarea>
          <label for="fullRecipe">Full recipe</label>
          <div class="invalid-feedback">
            Please enter full recipe breakdown.
          </div>
        </div>
        <div class="mb-3">
          <input
            type="file"
            class="form-control"
            id="recipePic"
            placeholder="Recipe photo"
            accept=".jpg, .png"
            @change="onFilePicked"
            required
          />
          <div class="invalid-feedback">
            Please enter a picture of finished dish.
          </div>
        </div>
        <div
          class="mb-3 image-preview"
          :style="imageUrl ? 'display: block' : 'display: none'"
        >
          <img :src="imageUrl" />
        </div>
        <button type="submit" class="btn btn-dark">
          Add recipe to the database
        </button>
      </form>
    </div>
    <TheBackdrop :style="{ display: isLoading ? 'block' : 'none' }" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

import { useStore } from "vuex";

import TheBackdrop from "../components/TheBackdrop.vue";

export default {
  components: {
    TheBackdrop,
  },
  setup() {
    const store = useStore();

    // Recipe properties
    const recipeTitle = ref("");
    const recipeShortDescription = ref("");
    const fullRecipe = ref("");
    const imageUrl = ref("");
    const image = ref("");

    const isLoading = ref(false);

    // Function triggered after picking an image to upload
    function onFilePicked(event) {
      const files = event.target.files;
      let filename = files[0].name;
      // Guard to prevent adding a files with a dot in filename
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Please add a valid file");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        imageUrl.value = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      image.value = files[0];
    }

    async function addRecipe() {
      isLoading.value = true;
      await store.dispatch("addNewRecipe", {
        id: "id" + new Date().getTime().toString(),
        title: recipeTitle.value,
        shortDescription: recipeShortDescription.value,
        fullRecipe: fullRecipe.value,
        image: image.value,
      });
      isLoading.value = false;
    }

    onMounted(() => {
      const recipeForm = document.querySelector(".needs-validation");
      recipeForm.addEventListener(
        "submit",
        (event) => {
          // Form validation
          if (!recipeForm.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            recipeForm.classList.add("was-validated");
          } else {
            event.preventDefault();
            fullRecipe.value =
              "<p>" + fullRecipe.value.replace(/\n/g, "</p>\n<p>") + "</p>";
            // Recipe submission after successful validation
            addRecipe();
            // Clearing all the inputs after form submission
            recipeTitle.value = "";
            recipeShortDescription.value = "";
            fullRecipe.value = "";
            imageUrl.value = "";
            // Clearing validation to prevent errors in all fields after submission and clearing the inputs
            if (recipeForm.classList.contains("was-validated")) {
              recipeForm.classList.remove("was-validated");
            }
          }
        },
        false
      );
    });

    return {
      recipeTitle,
      recipeShortDescription,
      fullRecipe,
      imageUrl,
      isLoading,
      onFilePicked,
    };
  },
};
</script>

<style>
.image-preview {
  border: 2px solid black;
  width: fit-content;
}

.image-preview img {
  height: 100px;
  width: auto;
}
</style>