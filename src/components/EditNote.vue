<template>
    <router-link class="btn btn-secondary" role="button" :to="{ name: 'landing' }"><i class="fa fa-arrow-left"></i> back
    </router-link>

    <div class="my-3">
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


import router from '@/routes';

import { useRoute } from 'vue-router'

export default {
    name: 'EditNote',

    setup() {
        const title = ref("")
        const text = ref("")
        const note = ref([])
        const wordCount = ref(0)
        const id = useRoute().params.id


        // watch the user type and call the wordCounter method
        watch(text, (newText) => {

            wordCounter(newText)
        })
        // count words
        const wordCounter = (text) => {
            // preg match spacing
            const words = text.trim().split(/\s+/);
            wordCount.value = words.length
        }

        // load the items from locaalll stooorage as soon as page loads (mounted)
        onMounted(() => {
            note.value = JSON.parse(localStorage.getItem('notes')).find(item => item.id == id)

            title.value = note.value.title
            text.value = note.value.text

        })

        // disable the button except all forms are filled
        const isDisabled = computed(() => title.value === '' || text.value === '')

        // prepare data before saving 
        const prepareData = () => {

            if (localStorage.notes) {


                note.value =
                {
                    id: id,
                    title: title.value,
                    text: text.value
                }

                const dataTosave = JSON.parse(localStorage.getItem('notes'));

                // get  the index (number) of the item that matches the id 
                const newData = dataTosave.findIndex(item => item.id == id);

                if (newData !== -1) {
                    dataTosave[newData] = note.value
                    localStorage.setItem('notes', JSON.stringify(dataTosave))
                }
                // update our lcalstoragge
                localStorage.setItem('notes', JSON.stringify(dataTosave));
            }

        }

        const save = function () {

            prepareData()
            //redirect to route 
            router.push('/')

        }

        return {
            note, title, text, isDisabled, wordCount, save
        }

    }

}


</script>