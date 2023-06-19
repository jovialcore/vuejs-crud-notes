<template>
  <h1 class="text-center mb-5">Welcome to the landing page</h1>

  <router-link class="btn btn-primary" role="button" :to="{ name: 'create' }"> Create a new note </router-link>

  <div class="card mt-3">
    <div class="card-body">
      <h5 class="card-title">Note title</h5>
      <p class="card-text">Notes brief description... </p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
