<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Emitter",
  setup(_, { emit }) {
    function emitEvent() {
      emit("my-event", "name", "password");
    }
    return { emitEvent };
  },
});
</script>
