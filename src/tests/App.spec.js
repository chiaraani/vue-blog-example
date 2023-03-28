import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import App from "@/App.vue";
import { createTestRouter, spyComponent } from "@/tests/test-support";
import TheHeader from "@/components/layout/TheHeader.vue";

describe("App", async () => {
  spyComponent(TheHeader);
  const router = await createTestRouter();
  mount(App, {
    global: {
      plugins: [router],
      stubs: { ArticlesIndex: true },
    },
  });

  it("mounts TheHeader", () => expect(TheHeader).toHaveBeenSetup());
});
