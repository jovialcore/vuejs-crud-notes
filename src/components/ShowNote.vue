<template>
    <router-link class="btn btn-secondary" role="button" :to="{ name: 'landing' }"><i class="fa fa-arrow-left"></i> back
    </router-link>

    <div class="card my-3">
        <div class="card-body">
            <h5 class="card-title">Note title : {{ title }} </h5>
            <p class="card-text"> Description: {{ text }}</p>
        </div>
    </div>
</template>


<script>

import { ref, onMounted } from "vue";

import { useRoute } from 'vue-router'
export default {
    name: 'ShowNote',



    setup() {
        const title = ref('')
        const text = ref('')
        const note = ref([])
        const id = useRoute().params.id

        onMounted(() => {
            note.value = JSON.parse(localStorage.getItem('notes')).find(item => item.id == id)
            title.value = note.value.title
            text.value = note.value.text

        })

        return { title, text, note }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>