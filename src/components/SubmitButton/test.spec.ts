import { mount } from "@vue/test-utils";
import SubmitButton from "./index.vue";

const msg = "submit";

const factory = (props: { isAdmin: boolean } | undefined) => {
  return mount(SubmitButton, {
    props: {
      msg,
      ...props,
    },
  });
};

describe("SubmitButton.vue", () => {
  describe("does not have admin privileges", () => {
    it("renders a message", () => {
      const wrapper = factory(undefined);

      expect(wrapper.find("span").text()).toBe("Not Authorized");
      expect(wrapper.find("button").text()).toBe("submit");
    });
  });

  describe("has admin privileges", () => {
    it("renders a message", () => {
      const wrapper = factory({ isAdmin: true });

      expect(wrapper.find("span").text()).toBe("Admin Privileges");
      expect(wrapper.find("button").text()).toBe("submit");
    });
  });
});
