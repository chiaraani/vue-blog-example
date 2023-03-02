import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";

import App from "@/App.vue";
import createTestRouter from '@/tests/test-support/createTestRouter'
import TheHeader from "@/components/layout/TheHeader.vue";
import { spyComponent } from "@/tests/test-support/expectComponentToHaveBeenMounted";


describe("App", async () => {
  spyComponent(TheHeader);
  const router = await createTestRouter()
  mount(App, {
    global: { 
      plugins: [router], 
      stubs: { ArticlesIndex: true }
    },
  });

  it("mounts TheHeader", () => expect(TheHeader).toHaveBeenMounted());
});
