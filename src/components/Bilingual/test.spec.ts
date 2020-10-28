import {
  // config,
  mount,
} from "@vue/test-utils";
import Bilingual from "./index.vue";
// import translations from "./translations";

describe("Bilingual", () => {
  it("renders successfully", () => {
    mount(Bilingual, {
      global: {
        mocks: {
          $t: (msg: string) => msg,
        },
      },
    });
  });

  // Reference: https://lmiller1990.github.io/vue-testing-handbook/v3/mocking-global-objects.html#settings-default-mocks-using-config
  // it("renders successfully, using global config", () => {
  //   const locale = "en";
  //   config.global.mocks = {
  //     // TODO: figure out:
  //     $t: (msg: string) => translations[locale][msg],
  //   };
  //   const wrapper = mount(Bilingual);
  //   console.log(wrapper.html());
  // });
});
