<template>
  <div>
    <div class="container overflow-hidden">
      <div class="row ms-2 gx-3 gy-3 row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </div>
  </div>
</template>

<script>
import RecipeCard from '../components/RecipeCard.vue'



export default {
  components: {
    RecipeCard,
  },
  setup() {

  }
}
</script>