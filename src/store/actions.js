export default {
  // Action that performs mutation adding new recipe to the recipes array in state
  async addNewRecipe(_, payload) {
    const recipeId = payload.id.toLocaleString();
    const response = await fetch(
      `https://recipes-database-9f754-default-rtdb.firebaseio.com/recipes/${recipeId}.json`,
      {
        method: "PUT",
        body: JSON.stringify({
          id: payload.id,
          title: payload.title,
          shortDescription: payload.shortDescription,
          fullRecipe: payload.fullRecipe,
        }),
      }
    );
    if (!response.ok) {
      // error ...
    }
    context.commit("addNewRecipe", payload);
  },

  async loadRecipes() {
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
      recipes.push(recipe);
      console.log(recipes);
    }
  },
};
