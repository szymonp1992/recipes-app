export default {
  allRecipes(state) {
    return state.recipes;
  },
  getRecipeById: (state) => (id) => {
    return state.recipes.find((recipe) => recipe.recipeId === id);
  },
  getSubmittedStatus(state) {
    return state.newRecipeSubmitted;
  },
};
