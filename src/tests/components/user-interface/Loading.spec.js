import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import Loading from "@/components/user-interface/Loading.vue";
import NotFound from "@/views/NotFound.vue";
import { createTestRouter } from "@/tests/test-support";

describe("Loading", async () => {
  const wrapper = mount(Loading, {
    props: { data: null },
    slots: { default: "Data was loaded!" },
    global: { plugins: [await createTestRouter()] },
  });

  it("renders loading sign if data is null", () => {
    expect(wrapper.find("img").attributes("alt")).toEqual("Loading...");
  });

  it("renders slot if there is data", async () => {
    await wrapper.setProps({ data: "records" });
    expect(wrapper.find('img[alt="Loading..."]').exists()).toBe(false);
    expect(wrapper.text()).toEqual("Data was loaded!");
  });

  it("renders NotFound if data is error 404", async () => {
    await wrapper.setProps({ data: new Error("404") });
    expect(wrapper.findComponent(NotFound).exists()).toBe(true);
  });
});
