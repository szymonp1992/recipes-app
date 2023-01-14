import { createStore } from "vuex";

import rootActions from "./actions.js";
import rootMutations from "./mutations.js";
import rootGetters from "./getters.js";

const store = createStore({
  state() {
    return {
      recipes: [
        {
          id: 1,
          title: "Pumpkin soup with parsley foam",
          shortDescription:
            "Comforting, warming and nourishing pumpkin soup with heavy cream, chili flakes and parsley foam made with egg whites.",
        },
      ],
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
