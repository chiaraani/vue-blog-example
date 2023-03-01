import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";

import App from "@/App.vue";
import router from '@/router/index.js'
import TheHeader from "@/components/layout/TheHeader.vue";
import { spyComponent } from "@/tests/test-support/expectComponentToHaveBeenMounted";
vi.mock('@/components/Articles/Index.vue', async () => ({ default: { setup: vi.fn() } }))



describe("App", () => {
  spyComponent(TheHeader);
  mount(App, {
    global: { plugins: [router] },
  });

  it("mounts TheHeader", () => expect(TheHeader).toHaveBeenMounted());
});
