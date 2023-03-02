import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import ArticlesCollection from "@/components/Articles/Collection.vue";
import { articles } from "@/tests/fixtures/articles";
import { spyComponent } from "@/tests/test-support/expectComponentToHaveBeenMounted";
import ArticleItem from "@/components/Articles/Item.vue";
import createTestRouter from "@/tests/test-support/createTestRouter";

describe("ArticlesCollection", async () => {
  spyComponent(ArticleItem);
  const router = await createTestRouter();
  mount(ArticlesCollection, {
    global: { plugins: [router] },
    props: { articles },
  });

  it("displays a collection of articles", () => {
    articles.forEach((article) =>
      expect(ArticleItem).toHaveBeenMountedWith({ article })
    );
  });
});
