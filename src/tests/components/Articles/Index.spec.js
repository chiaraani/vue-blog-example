import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render } from "@testing-library/vue";

import { articles } from "@/tests/fixtures/articles";
vi.doMock("@/db", () => ({ default: { articles } }));
import ArticlesIndex from "@/components/Articles/Index.vue";
import { createTestRouter, spyComponent } from "@/tests/test-support";

import ArticlesCollection from "@/components/Articles/Collection.vue";
spyComponent(ArticlesCollection);

let router;
let wrapper;

beforeEach(async () => {
  document.body.innerHTML = "<div id='floating'></div>";
  router = await createTestRouter();
  wrapper = render(ArticlesIndex, { global: { plugins: [router] } });
});
afterEach(() => (document.body.innerHTML = ""));

describe("ArticlesIndex", () => {
  it("finds all articles and mounts collection of them", () => {
    expect(ArticlesCollection).toHaveBeenSetupWith({ articles });
  });

  it("renders link to new article", () => {
    wrapper.getByText(/New article/, {
      selector: `a[href="${router.resolve({ name: "new article" }).path}"]`,
    });
  });
});
