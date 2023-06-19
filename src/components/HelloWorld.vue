<template>
  <div class="container">
    <h1 class="text-center">{{ msg }}</h1>

    <div class="card mt-5">
      <div class="card-body">
        <h5 class="card-title">Note title</h5>
        <p class="card-text">Notes brief description... </p>

      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
