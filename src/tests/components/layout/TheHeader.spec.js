import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import TheHeader from "@/components/layout/TheHeader.vue";
import router from "@/router";
import { RouterLink } from "vue-router";
import { spyComponent } from "@/tests/test-support/expectComponentToHaveBeenMounted";

describe("TheHeader", () => {
  const links = [{ name: "home" }, { name: "about" }];
  spyComponent(RouterLink);
  mount(TheHeader, { global: { plugins: [router] } });

  links.forEach((link) => {
    it(`renders link to ${JSON.stringify(link)}`, () =>
      expect(RouterLink).toHaveBeenMountedWith({ to: link }));
  });
});
