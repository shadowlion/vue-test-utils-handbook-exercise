<template>
  <div class="hello">
    {{ $t("helloWorld") }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Bilingual",
});
</script>
