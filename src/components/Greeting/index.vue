<template>
  <div>
    {{ greeting }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Greeting",
  setup() {
    const greeting = ref("Vue and TDD");
    return { greeting };
  },
});
</script>
