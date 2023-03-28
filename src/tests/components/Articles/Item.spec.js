import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/vue";

import ArticleItem from "@/components/Articles/Item.vue";
import { article } from "@/tests/fixtures/articles";
vi.mock("@/helpers/summarize", async () => ({
  default: vi.fn(() => "*Emphasis*"),
}));
import summarize from "@/helpers/summarize";
import { createTestRouter } from "@/tests/test-support";

describe("ArticleItem", async () => {
  const router = await createTestRouter();
  const wrapper = render(ArticleItem, {
    global: { plugins: [router] },
    props: { article, id: 1 },
  });

  it("links title of article to article route", () => {
    wrapper.getByText(article.title, {
      selector: `h2 > a[href="${
        router.resolve({ name: "article", params: { id: 1 } }).path
      }"]`,
    });
  });

  it("renders summary", () => {
    expect(summarize).toHaveBeenCalledWith(
      expect.objectContaining({ text: article.body })
    );
  });

  it("renders summary in HTML", () => {
    expect(wrapper.html()).toContain("<em>Emphasis</em>");
  });
});
