import { defineComponent } from "vue";
import Child from "./Child";

export default defineComponent({
  name: "Parent",
  components: { Child },
  template: "<div><Child /></div>",
});
