import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/vue";

import ArticleItem from "@/components/Articles/Item.vue";
import { article } from "@/tests/fixtures/articles";
vi.mock("@/helpers/summarize", async () => ({
  default: vi.fn(() => "*Emphasis*"),
}));
import summarize from "@/helpers/summarize";
import { createTestRouter, spyComponent } from "@/tests/test-support";
import { RouterLink } from "vue-router";

describe("ArticleItem", async () => {
  spyComponent(RouterLink);
  const router = await createTestRouter();
  const wrapper = render(ArticleItem, {
    global: { plugins: [router] },
    props: { article },
  });

  it("renders title", () => {
    wrapper.getByText(article.title, { selector: "h2 > a" });
  });

  it("renders summary", () => {
    expect(summarize).toHaveBeenCalledWith(
      expect.objectContaining({ text: article.body })
    );
  });

  it("renders summary in HTML", () => {
    expect(wrapper.html()).toContain("<em>Emphasis</em>");
  });

  it("is linked to article route", () => {
    expect(RouterLink).toHaveBeenMountedWith({
      to: { name: "article", params: { slug: article.slug } },
    });
  });
});
