<template>
  <h1 class="text-center mb-5">Welcome to the landing page</h1>

  <router-link class="btn btn-primary" role="button" :to="{ name: 'create' }"> Create a new note </router-link>

  <div class="card my-3" v-for="(note) in notes" :key="note.id">
    <div class="card-body">
      <h5 class="card-title">Note title : {{ note.title }} </h5>
      <p class="card-text"> Description: {{ note.text }}</p>

      <router-link class="btn btn-secondary" role="button" :to="{ name: 'edit', params: {id: note.id} }"> edit note </router-link>
      <router-link class="ms-3 btn btn-success" role="button" :to="{ name: 'show', params: {id: note.id} }"> show note </router-link>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
export default {
  name: 'LandingPage',

  setup() {
    const title = ref('')
    const notes = ref([])

    onMounted(() => {

      if (localStorage.notes) {

    
        notes.value = JSON.parse(localStorage.getItem('notes'))

      }

    })

    return {
      title,
      notes
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
