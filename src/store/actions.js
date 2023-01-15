export default {
  // Action that performs mutation adding new recipe to the recipes array in state
  addNewRecipe(context, payload) {
    context.commit("addNewRecipe", payload);
  },
};
