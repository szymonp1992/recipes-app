<template>
  <div class="container">
    <form>
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="recipeTitle" placeholder="Recipe title">
        <label for="recipeTitle">Recipe title</label>
      </div>
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="recipeShortDescription" placeholder="Short description">
        <label for="recipeShortDescription">Short description</label>
      </div>
      <div class="form-floating mb-3">
        <textarea class="form-control" id="fullRecipe" placeholder="Full recipe" style="height: 400px"></textarea>
        <label for="fullRecipe">Full recipe</label>
      </div>
      <div class="mb-3">
        <input type="file" class="form-control" id="recipePic" placeholder="Recipe photo" accept=".jpg, .png">
      </div>
      <button type="submit" class="btn btn-dark">Add recipe to the database</button>
    </form>
  </div>
</template>

