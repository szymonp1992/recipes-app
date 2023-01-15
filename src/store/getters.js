export default {
  allRecipes(state) {
    return state.recipes;
  },
  getRecipeById: (state) => (id) => {
    return state.recipes.find((recipe) => recipe.id === id);
  },
};
