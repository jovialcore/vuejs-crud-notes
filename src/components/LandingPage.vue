<template>

  <div class="container mt-5">
    <h1 class="text-center mb-5">{{ msg }}</h1>

    <a class="btn btn-primary" href="#" role="button">Create a new note</a>
    <div class="card mt-3">
      <div class="card-body">
        <h5 class="card-title">Note title</h5>
        <p class="card-text">Notes brief description... </p>

      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
