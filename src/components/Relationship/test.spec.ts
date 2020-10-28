import { mount, shallowMount } from "@vue/test-utils";
import Child from "./Child";
import Parent from "./Parent";

describe("HelloWorld.vue", () => {
  it("shallowMount and mount display the same with the Child component", () => {
    const shallowWrapper = shallowMount(Child);
    const mountWrapper = mount(Child);

    console.log("Shallow mounting Child component:", shallowWrapper.html());
    console.log("Normal mounting Child component:", mountWrapper.html());

    expect(shallowWrapper.html()).toMatch(mountWrapper.html());
  });

  it("shallowMount and mount do not display the same within a Parent component", () => {
    const shallowWrapper = shallowMount(Parent);
    const mountWrapper = mount(Parent);

    console.log("Shallow mounting Parent component:", shallowWrapper.html());
    console.log("Normal mounting Child component:", mountWrapper.html());

    expect(shallowWrapper.html()).not.toMatch(mountWrapper.html());
  });
});
