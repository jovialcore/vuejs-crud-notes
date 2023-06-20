<template>
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Note Title</label>
        <input v-model="title" type="text" class="form-control" id="exampleFormControlInput1"
            placeholder="e.g Purple Hibiscus" required>
    </div>
    <div class="mb-3">
        Words: {{ wordCount }}
        <label for="exampleFormControlTextarea1" class="form-label">Text Description</label>
        <textarea v-model="text" @keypress.enter="wordCounter" class="form-control" id="exampleFormControlTextarea1"
            rows="3" required></textarea>
    </div>

    <button class="btn btn-primary" :disabled="isDisabled" @click="save" role="button"> Create </button>
</template>



<script >

import { onMounted, ref } from 'vue'

import { useRoute } from 'vue-router'

export default {
    name: 'EditNote',



    setup() {
        const title = ref('');
        const text = ref('')
        const note = ref([])
        const id = useRoute().params.id

        onMounted(() => {
            note.value = JSON.parse(localStorage.getItem('notes')).find(item => item.id == id)
            title.value = note.value.title
            text.value = note.value.text
            console.log(note.value)
        })



        return {
            note, title, text
        }

    }

}


</script>