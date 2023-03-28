import { describe, it, expect, beforeAll } from "vitest"
import { render } from "@testing-library/vue"

import { articles } from "@/tests/fixtures/articles"
import { createTestRouter, spyComponent } from "@/tests/test-support"

import ArticleItem from "@/components/Articles/Item.vue"
spyComponent(ArticleItem)

import ArticlesCollection from "@/components/Articles/Collection.vue"

describe("ArticlesCollection", () => {
  let router
  beforeAll(async () => (router = await createTestRouter()))

  it("displays a collection of articles", () => {
    render(ArticlesCollection, {
      global: { plugins: [router] },
      props: { articles },
    })

    articles.forEach((article, index) =>
      expect(ArticleItem).toHaveBeenSetupWith({ article, id: index })
    )
  })

  it('displays a message "there are no articles" when given array is empty', () => {
    const wrapper = render(ArticlesCollection, {
      global: { plugins: [router] },
      props: { articles: [] },
    })

    wrapper.getByText("There are no articles.")
  })
})
