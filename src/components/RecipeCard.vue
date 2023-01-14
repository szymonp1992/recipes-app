<template>
    <div class="col">
        <div class="card">
            <img src="../assets/soup.png" class="card-img-top recipe-photo" alt="Pumpkin soup">
            <div class="card-body">
                <h5 class="card-title">{{ title }}</h5>
                <p class="card-text">{{ shortDescription }}</p>
                <a href="#" class="btn btn-dark">Full recipe</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'short-description'],
}

</script>