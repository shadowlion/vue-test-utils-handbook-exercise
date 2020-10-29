<template>
  <div>
    <span v-show="showSpan">
      Parent Component
    </span>
    <Child v-if="showChild" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Child from "./Child.vue";

export default defineComponent({
  name: "Parent",
  components: {
    Child,
  },
  setup() {
    const showSpan = ref(false);
    const showChild = ref(false);
    return { showSpan, showChild };
  },
});
</script>
