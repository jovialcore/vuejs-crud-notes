<template>
  <h1 class="text-center mb-5">Welcome to the landing page</h1>

  <router-link class="btn btn-primary" role="button" :to="{ name: 'create' }"> Create a new note </router-link>

  <div class="card mt-3">
    <div class="card-body">
      <h5 class="card-title">Note title :  {{ title }} </h5>
      <p class="card-text"> Description: {{ text }}</p>

    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
export default {
  name: 'LandingPage',

  setup() {
    const title = ref('')
    const text = ref('jjfjfj')
    onMounted(() => {

      if (localStorage.userData) {
        
        title.value = localStorage.noteTitle
        text.value = localStorage.noteText

      }
      console.log(`the component is now mounted.`)
    })

    return {
      title,
      text
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
