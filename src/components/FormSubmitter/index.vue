<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input v-model="username" data-username />
      <input type="submit" />
    </form>

    <div class="message" v-if="submitted">
      Thank you for your submission, {{ username }}.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "FormSubmitter",

  setup() {
    const username = ref("");
    const submitted = ref(false);

    function handleSubmit() {
      submitted.value = true;
    }

    return { username, submitted, handleSubmit };
  },
});
</script>
