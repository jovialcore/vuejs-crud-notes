
<template>
  <router-link class="btn btn-secondary" role="button" :to="{ name: 'landing' }"><i class="fa fa-arrow-left"></i> back
  </router-link>

  <div class="my-3">
    <label for="exampleFormControlInput1" class="form-label">Note Title</label>
    <input v-model="title" type="text" class="form-control" id="exampleFormControlInput1"
      placeholder="e.g Purple Hibiscus" required>
  </div>
  <div class="mb-3">
    Words: {{ wordCount }}
    <label for="exampleFormControlTextarea1" class="form-label">Text Description</label>
    <textarea v-model="text" @keypress.enter="wordCounter" class="form-control" id="exampleFormControlTextarea1" rows="3"
      required></textarea>
  </div>

  <button class="btn btn-primary" :disabled="isDisabled" @click="save" role="button"> Create </button>
</template>


<script>
import router from '@/routes';
import { computed, ref, watch } from 'vue'
export default {
  name: 'CreateNote',

  setup() {
    const text = ref('');
    const title = ref('');

    const wordCount = ref(0);

    watch(text, (newText) => {

      wordCounter(newText);

    });

    const wordCounter = (text) => {
      const words = text.trim().split(/\s+/);
      wordCount.value = words.length
    }


    const uuid = () => {
      return Math.random().toString(36).substring(2, 9)
    }

    const prepareData = () => {

      const data = {
        id: uuid(),
        title: title.value,
        text: text.value
      }

      const dataTosave = JSON.parse(localStorage.getItem('notes')) || [];
      dataTosave.unshift(data)
      localStorage.setItem('notes', JSON.stringify(dataTosave));


    }


    // disbale create button untill all forms are filled works 
    const isDisabled = computed(() => title.value === '' || text.value === '')

    const save = function () {

      prepareData()
      title.value = "";
      text.value = "";

      router.push('/')
    }
    return {
      text,
      wordCount,
      wordCounter,
      save,
      title,
      prepareData,
      uuid,
      isDisabled
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>