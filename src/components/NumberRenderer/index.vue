<template>
  <div>{{ numbers }}</div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "NumberRenderer",
  props: {
    even: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const numbers = computed(() => {
      const evens = [];
      const odds = [];

      for (let i = 1; i < 10; i++) {
        if (i % 2 === 0) {
          evens.push(i);
        } else {
          odds.push(i);
        }
      }

      return props.even ? evens.join(", ") : odds.join(", ");
    });

    return { numbers };
  },
});
</script>
