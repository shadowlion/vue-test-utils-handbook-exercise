import { mount } from "@vue/test-utils";
import Greeting from "@/components/Greeting/index.vue";

describe("Greeting.vue", () => {
  it("renders a greeting", () => {
    const wrapper = mount(Greeting);

    expect(wrapper.text()).toMatch("Vue and TDD");
  });
});
