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

export default {
    name: 'EditNote',

    setup() {
        const note = ref([])
        const getNote = onMounted(() => {

        })

        return {
            note, getNote
        }

    }

}


</script>