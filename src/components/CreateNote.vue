
<template>
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Note Title</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="e.g Purple Hibiscus">
  </div>
  <div class="mb-3">
    Words: {{ wordCount }}
    <label for="exampleFormControlTextarea1" class="form-label">Text Description</label>
    <textarea v-model="text" @keypress.enter="wordCounter" class="form-control" id="exampleFormControlTextarea1"
      rows="3"></textarea>
  </div>

  <button class="btn btn-primary" role="button"> Create </button>
</template>


<script>
import { ref, watch } from 'vue'
export default {
  name: 'CreateNote',

  setup() {
    const text = ref('');
    console.log(text.value)
    const wordCount = ref(0);

    watch(text, (newText) => {

      wordCounter(newText);

    });

    const wordCounter = (text) => {
      const words = text.trim().split(/\s+/);
      wordCount.value = words.length
    }
    return {
      text,
      wordCount,
      wordCounter
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>