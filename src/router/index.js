import { createRouter, createWebHistory } from "vue-router";
import RecipesList from "../views/RecipesList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: RecipesList,
    },
    {
      path: "/add-new-recipe",
      name: "add-new-recipe",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AddRecipe.vue"),
    },
  ],
});

export default router;
