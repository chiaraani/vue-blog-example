import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";

import { article } from "@/tests/fixtures/articles";
vi.doMock("@/db", () => ({ default: { articles: [article]  } }));

import ArticleView from "@/views/Articles/Show.vue";
import { createTestRouter } from "@/tests/test-support";
import Title from "@/components/layout/Title.vue";

describe("ArticleView", async () => {
  let router = await createTestRouter({
    name: "article",
    params: { id: 0 },
  });
  let wrapper = mount(ArticleView, {
    global: { plugins: [router] },
  });

  it("renders title of article", () => {
    expect(wrapper.findComponent(Title).text()).toEqual(article.title);
  });

  it("renders body of article", () => {
    expect(wrapper.html()).toContain(
      "<p>Inside <code>em</code> HTML element.</p>"
    );
  });
});
