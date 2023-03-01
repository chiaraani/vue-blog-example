import { describe, it, expect, vi } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";

import App from "@/App.vue";
import router from "@/router/index";
import TheHeader from "@/components/layout/TheHeader.vue";
import { spyComponent } from "@/tests/test-support/expectComponentToHaveBeenMounted";
vi.mock('@/components/Articles/Index.vue', async () => ({ default: { setup: vi.fn() } }))

describe("App", () => {
  spyComponent(TheHeader);

  it("works with transitions", async () => {
    router.push("/about");
    await router.isReady();

    const wrapper = mount(App, {
      global: { plugins: [router] },
    });

    expect(wrapper.get("h1").text()).toEqual("About");

    await wrapper.find("a").trigger("click");
    await flushPromises();

    expect(wrapper.get("h1").text()).toEqual("Home");
  });

  it("mounts TheHeader", () => expect(TheHeader).toHaveBeenMounted());
});
