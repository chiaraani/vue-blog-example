import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import TheHeader from "@/components/layout/TheHeader.vue";
import createTestRouter from '@/tests/test-support/createTestRouter'
import { RouterLink } from "vue-router";
import { spyComponent } from "@/tests/test-support/expectComponentToHaveBeenMounted";

describe("TheHeader", async () => {
  const links = [{ name: "home" }, { name: "about" }];
  spyComponent(RouterLink);
  const router = await createTestRouter()
  mount(TheHeader, { global: { plugins: [router] } });

  links.forEach((link) => {
    it(`renders link to ${JSON.stringify(link)}`, () =>
      expect(RouterLink).toHaveBeenMountedWith({ to: link }));
  });
});
