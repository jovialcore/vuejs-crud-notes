<template>
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Note Title</label>
        <input v-model="title" type="text" class="form-control" id="exampleFormControlInput1"
            placeholder="e.g Purple Hibiscus" required>
    </div>
    <div class="mb-3">
       
        <label for="exampleFormControlTextarea1" class="form-label"> Words: {{ wordCount }} </label>
        <textarea v-model="text" @keypress.enter="wordCounter" class="form-control" id="exampleFormControlTextarea1"
            rows="3" required></textarea>
    </div>

    <button class="btn btn-primary" :disabled="isDisabled" @click="save" role="button"> Update </button>
</template>



<script >

import { onMounted, ref, computed, watch } from 'vue'

import { useRoute } from 'vue-router'

export default {
    name: 'EditNote',



    setup() {
        const title = ref('')
        const text = ref('')
        const note = ref([])
        const wordCount= ref(0)
        const id = useRoute().params.id


        watch(text, (newText) => {

            wordCounter(newText)
        })

        const wordCounter = (text) => {
            const words = text.trim().split(/\s+/);
            wordCount.value = words.length

            console.log(words)
        }

        onMounted(() => {
            note.value = JSON.parse(localStorage.getItem('notes')).find(item => item.id == id)

            title.value = note.value.title
            text.value = note.value.text

        })

        const isDisabled = computed(() => title.value === '' || text.value === '')

        return {
            note, title, text, isDisabled, wordCount
        }

    }

}


</script>