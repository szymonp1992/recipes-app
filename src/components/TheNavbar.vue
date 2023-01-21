<template>
  <nav class="navbar navbar-dark sticky-top navbar-expand-md bg-dark">
    <div class="container-fluid">
      <RouterLink class="navbar-brand fs-1 m-0" to="/"
        ><span class="align-middle text-light">My best recipes</span>
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul
          class="navbar-nav mb-2 mb-lg-0 d-flex justify-content-end"
          style="width: 100%"
        >
          <li class="nav-item me-5 fs-5">
            <RouterLink class="nav-link" to="/"
              ><span class="align-middle text-light">Recipes</span>
            </RouterLink>
          </li>
          <li class="nav-item fs-5">
            <RouterLink class="nav-link" to="/add-new-recipe"
              ><span class="align-middle text-light">Add new recipe</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";

components: {
  RouterLink;
}
</script>

