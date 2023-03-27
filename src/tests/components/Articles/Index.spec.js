import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render } from "@testing-library/vue";

import { articles } from "@/tests/fixtures/articles";
vi.doMock("@/db", async () => ({ default: { articles } }));
import ArticlesIndex from "@/components/Articles/Index.vue";
import { createTestRouter, spyComponent } from "@/tests/test-support";
import ArticlesCollection from "@/components/Articles/Collection.vue";

let router;
let wrapper;

beforeEach(async () => {
  // create teleport target
  const el = document.createElement('div')
  el.id = 'floating'
  document.body.appendChild(el)


  spyComponent(ArticlesCollection);
  router = await createTestRouter();
  wrapper = render(ArticlesIndex, { global: { plugins: [router] } });
})

afterEach(() => {
  // clean up
  document.body.outerHTML = ''
})

describe("ArticlesIndex", () => {
  it("finds all articles and mounts collection of them", () => {
    expect(ArticlesCollection).toHaveBeenMountedWith({ articles });
  });

  it('renders link to new article', () => {
    wrapper.getByText(/New article/, { 
      selector: `a[href="${router.resolve({ name: 'new article' }).path}"]` 
    })
  })
});
