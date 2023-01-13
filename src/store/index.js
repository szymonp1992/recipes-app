import { createStore } from "vuex";

import rootActions from "./actions.js";
import rootMutations from "./mutations.js";
import rootGetters from "./getters.js";

const store = createStore({
  state() {
    return {
      recipes: [],
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
