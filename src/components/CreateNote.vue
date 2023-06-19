
<template>
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Note Title</label>
    <input v-model="title" type="text" class="form-control" id="exampleFormControlInput1"
      placeholder="e.g Purple Hibiscus">
  </div>
  <div class="mb-3">
    Words: {{ wordCount }}
    <label for="exampleFormControlTextarea1" class="form-label">Text Description</label>
    <textarea v-model="text" @keypress.enter="wordCounter" class="form-control" id="exampleFormControlTextarea1"
      rows="3"></textarea>
  </div>

  <button class="btn btn-primary" @click="save" role="button"> Create </button>
</template>


<script>
import { computed, ref, watch } from 'vue'
export default {
  name: 'CreateNote',

  setup() {
    const text = ref('');
    const title = ref('');
    const id = ref(0);

    const arr = ref(0);

    const wordCount = ref(0);

    watch(text, (newText) => {

      wordCounter(newText);

    });

    const wordCounter = (text) => {
      const words = text.trim().split(/\s+/);
      wordCount.value = words.length
    }

    const prepareData = () => {

      const data = {
        id: uuid(),
        text: text.value
      }
      const dataTosave = JSON.parse(localStorage.getItem('notes')) || [];
      dataTosave.push(data)
      localStorage.setItem('notes', JSON.stringify(dataTosave));
    }

    const uuid = () => {
      return Math.random().toString(36).substring(2, 9)
    }

    const save = function () {

      prepareData()

      localStorage.setItem('noteTitle', title.value)
      localStorage.setItem('noteText', text.value)
    }
    return {
      text,
      wordCount,
      wordCounter,
      save,
      title,
      id,
      arr,
      prepareData,
      uuid,


    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>