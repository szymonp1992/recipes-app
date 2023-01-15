import { createRouter, createWebHistory } from "vue-router";
import RecipesList from "../views/RecipesList.vue";
import AddRecipe from "../views/AddRecipe.vue";
import RecipePage from "../views/RecipePage.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/recipes",
    },
    {
      path: "/recipes",
      component: RecipesList,
    },
    {
      path: "/recipes/:id",
      name: "recipe-details",
      component: RecipePage,
    },
    {
      path: "/add-new-recipe",
      component: AddRecipe,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

export default router;
