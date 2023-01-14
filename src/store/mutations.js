export default {
  addNewRecipe(state, payload) {
    state.recipes.push(payload);
    console.log(state.recipes);
  },
};
