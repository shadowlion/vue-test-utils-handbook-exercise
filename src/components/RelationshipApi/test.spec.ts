// import { shallowMount, mount } from "@vue/test-utils";
// import ParentWithAPICallChild from "./ParentWithAPICallChild.vue";
// import ComponentWithAsyncCall from "./ComponentWithAsyncCall.vue";

// TODO: fix all tests

// describe("ParentWithAPICallChild.vue", () => {
//   it("renders with mount and does initialize API call", () => {
//     const wrapper = mount(ParentWithAPICallChild);

//     expect(wrapper.find(ComponentWithAsyncCall).exists()).toBe(true);
//   });

//   it("renders with mount and does initialize API call, using stubs", () => {
//     const wrapper = mount(ParentWithAPICallChild, {
//       stubs: {
//         ComponentWithAsyncCall: true,
//       },
//     });

//     expect(wrapper.find(ComponentWithAsyncCall).exists()).toBe(true);
//   });

//   it("renders with shallowMount and does not initialize API call", () => {
//     const wrapper = shallowMount(ParentWithAPICallChild);

//     expect(wrapper.find(ComponentWithAsyncCall).exists()).toBe(true);
//   });
// });
