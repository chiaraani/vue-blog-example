import { describe, it, expect } from "vitest";
import { render } from "@testing-library/vue";

import ArticlesCollection from "@/components/Articles/Collection.vue";
import { articles } from "@/tests/fixtures/articles";
import { createTestRouter, spyComponent } from "@/tests/test-support";
import ArticleItem from "@/components/Articles/Item.vue";

describe("ArticlesCollection", async () => {
  spyComponent(ArticleItem);
  const router = await createTestRouter();
  render(ArticlesCollection, {
    global: { plugins: [router] },
    props: { articles },
  });

  it("displays a collection of articles", () => {
    articles.forEach((article) =>
      expect(ArticleItem).toHaveBeenMountedWith({ article })
    );
  });
});
