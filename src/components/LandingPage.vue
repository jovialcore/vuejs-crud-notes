<template>
  <h1 class="text-center mb-5">Welcome to Notes Landing Page</h1>

  <router-link class="btn btn-primary" role="button" :to="{ name: 'create' }"> Create a new note </router-link>

  <div class="card my-3" v-for="(note) in notes" :key="note.id">
    <div class="card-body">
      <h5 class="card-title">Note title : {{ note.title }} </h5>
      <p class="card-text"> Description: {{ note.text }}</p>

      <router-link class="btn btn-secondary" role="button" :to="{ name: 'edit', params: { id: note.id } }"> <i
          class="fa fa-edit"></i> edit note
      </router-link>
      <router-link class="ms-3 btn btn-success" role="button" :to="{ name: 'show', params: { id: note.id } }"> <i
          class="fa fa-eye"></i> show note
      </router-link>

      <button type="button" @click="del(note.id)" class=" ms-3 btn btn-danger"> <i class="fa fa-trash-o"></i>
        delete</button>
    </div>
  </div>


  <div class="mt-4" v-if="isNote">
    <p> No Notes... Please add </p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'LandingPage',

  setup() {
    const title = ref('')
    const notes = ref([])
    const noNotes = ref("")
    const isNote = ref(null)

    onMounted(() => {
      if (localStorage.notes && JSON.parse(localStorage.getItem('notes')).length) {

        notes.value = JSON.parse(localStorage.getItem('notes'))
        isNote.value = false;
      } else {
        noNotes.value = 'No Notes'
        isNote.value = true;

      }

    })
    const del = function (id) {

      if (confirm('are you sure you want to do this ? ')) {
        const localStorageNotes = JSON.parse(localStorage.getItem('notes'))

        const newNotes = localStorageNotes.filter(item => item.id !== id);

        notes.value = newNotes

        localStorage.setItem('notes', JSON.stringify(newNotes))

      }

    }



    return {
      title,
      notes,
      del,
      isNote
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
