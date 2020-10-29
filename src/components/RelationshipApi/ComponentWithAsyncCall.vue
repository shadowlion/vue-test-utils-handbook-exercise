<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

async function makeApiCall() {
  console.log("Making api call");
  await axios.get("https://jsonplaceholder.typicode.com/posts/1");
}

export default defineComponent({
  name: "ComponentWithAsyncCall",

  async setup() {
    await makeApiCall();
  },
});
</script>
