import { mount } from "@vue/test-utils";
import "@testing-library/jest-dom";
import Parent from "./Parent.vue";

describe("Parent", () => {
  it("does not render a span", () => {
    const wrapper = mount(Parent);

    expect(wrapper.find("span").element).not.toBeVisible();
  });

  it("renders a span", () => {
    const wrapper = mount(Parent);
    // wrapper.setData({ showSpan: true })  // ???
    // console.log(wrapper.vm.showSpan);
    // const wrapper = mount(Parent, {
    //   data() {
    //     return { showSpan: true };
    //   },
    // });

    expect(wrapper.find("span").element).toBeVisible();
  });
});
