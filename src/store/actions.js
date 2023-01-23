import { storage } from "../firebase.js";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default {
  // Action that performs mutation adding new recipe to the recipes array in state
  async addNewRecipe(context, payload) {
    const response = await fetch(
      `https://recipes-database-9f754-default-rtdb.firebaseio.com/recipes.json`,
      {
        method: "POST",
        body: JSON.stringify({
          id: payload.id,
          title: payload.title,
          shortDescription: payload.shortDescription,
          fullRecipe: payload.fullRecipe,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Recipe not added to the database. Try again later.");
    }

    context.commit("addNewRecipe", {
      id: payload.id,
      title: payload.title,
      shortDescription: payload.shortDescription,
      fullRecipe: payload.fullRecipe,
      image: payload.image,
    });

    const image = payload.image;
    const storageRef = ref(storage, `recipe photos/${payload.id}`);
    await uploadBytes(storageRef, image);
  },

  async loadRecipes(context) {
    // Fetching all recipes from Firebase Realtime Database
    const response = await fetch(
      "https://recipes-database-9f754-default-rtdb.firebaseio.com/recipes.json"
    );
    const responseData = await response.json();

    const recipes = [];

    for (const key in responseData) {
      const recipe = {
        recipeId: responseData[key].id,
        recipeTitle: responseData[key].title,
        recipeShortDesc: responseData[key].shortDescription,
        recipeFullRecipe: responseData[key].fullRecipe,
      };
      // Loading images from Firebase Storage
      const imageUrl = await getDownloadURL(
        ref(storage, `recipe photos/${recipe.recipeId}`)
      );
      recipe.recipeImageUrl = imageUrl;
      recipes.unshift(recipe);
    }
    context.commit("loadRecipes", recipes);
  },
};
