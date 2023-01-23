export default {
  // Mutation adding new recipe to recipes array in state
  addNewRecipe(state, payload) {
    state.recipes.unshift(payload);
  },
  // Loading recipes to state
  loadRecipes(state, payload) {
    state.recipes = payload;
  },
};
