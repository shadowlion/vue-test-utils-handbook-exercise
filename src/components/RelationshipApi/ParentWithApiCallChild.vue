<template>
  <ComponentWithAsyncCall />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ComponentWithAsyncCall from "./ComponentWithAsyncCall.vue";

export default defineComponent({
  name: "ParentWithAPICallChild",

  components: {
    ComponentWithAsyncCall,
  },
});
</script>
