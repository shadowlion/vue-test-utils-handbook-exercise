import { mount } from "@vue/test-utils";
import Emitter from "./index.vue";

describe("Emitter", () => {
  it("emits an event with two arguments", async () => {
    const wrapper = mount(Emitter);

    wrapper.vm.emitEvent();

    const emitted = wrapper.emitted();

    // console.log(emitted);
    // console.log(emitted["my-event"]);

    expect(emitted["my-event"][0]).toEqual(["name", "password"]);
  });

  it("emits an event with two arguments", () => {
    const wrapper = mount(Emitter);

    wrapper.vm.emitEvent();
    wrapper.vm.emitEvent();

    const emitted = wrapper.emitted();

    // console.log(emitted["my-event"]);

    expect(emitted["my-event"]).toEqual([
      ["name", "password"],
      ["name", "password"],
    ]);
  });
});
