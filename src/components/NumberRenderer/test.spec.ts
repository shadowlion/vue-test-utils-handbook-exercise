import { mount } from "@vue/test-utils";
import NumberRenderer from "./index.vue";

describe("NumberRenderer", () => {
  it("renders even numbers", () => {
    const wrapper = mount(NumberRenderer, {
      props: {
        even: true,
      },
    });

    expect(wrapper.text()).toBe("2, 4, 6, 8");
  });

  it("renders odd numbers", () => {
    const wrapper = mount(NumberRenderer, {
      props: {
        even: false,
      },
    });

    expect(wrapper.text()).toBe("1, 3, 5, 7, 9");
  });
});
