<script setup>
import { reactive, computed } from 'vue'
import { marked } from 'marked'

const props = defineProps(["article"]);
defineEmits(["save"]);

const data = reactive(props.article || {})

const preview = computed(() => marked(data.body || ''))
</script>

<template>
  <article class="card ">
    <form @submit.prevent="$emit('save', data)" >
      <div class="large field">
        <div>
          <label for="title_field">Title</label>
          <span class="required-help">*</span>
        </div>
        <input type="text" id="title_field" v-model="data.title" required />
      </div>


     <div class="split-2">
        <div class="field">
          <div>
            <label for="body_field">Body</label>
            <span class="required-help">*</span>
          </div>
          <textarea id="body_field" v-model="data.body" required />
        </div>
        <div>
          <p id="preview-label" class="label">Preview</p>
          <div class="preview" v-html="preview" aria-labelledby="preview-label"></div>
        </div>
      </div>

      <button type="submit">Save</button>
      <RouterLink :to="{ name: 'home' }" class="red button">Cancel</RouterLink>
    </form>
  </article>
</template>
