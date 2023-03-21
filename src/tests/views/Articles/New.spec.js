import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/vue";

import { newArticle, expectedNewArticle } from "@/tests/fixtures/articles";
import { createTestRouter } from "@/tests/test-support";

vi.doMock("@/data", async () => ({
  createRecord: vi.fn().mockResolvedValue(expectedNewArticle),
}));
import { createRecord } from "@/data";

vi.doMock("@/components/Articles/Form.vue", async () => ({
  default: {
    created() {
      this.$emit("save", newArticle);
    },
    template: "<span></span>",
  },
}));

import NewArticleView from "@/views/Articles/New.vue";

describe("NewArticleView", async () => {
  const router = await createTestRouter();
  router.push = vi.fn();
  render(NewArticleView, {
    global: { plugins: [router] },
  });

  it("creates an article", () => {
    expect(createRecord).toHaveBeenCalledWith("articles", newArticle);
  });

  it("redirects to new article show", () => {
    expect(router.push).toHaveBeenCalledWith({
      name: "article",
      params: { slug: expectedNewArticle.slug },
    });
  });
});
