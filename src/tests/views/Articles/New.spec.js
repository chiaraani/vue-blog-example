import { describe, it, expect, vi } from "vitest"
import { render } from "@testing-library/vue"

import { articles, newArticle } from "@/tests/fixtures/articles"
import { createTestRouter } from "@/tests/test-support"

const db = { articles: [...articles] }
vi.doMock("@/db", () => ({ default: db }))

vi.doMock("@/components/Articles/Form.vue", async () => ({
  default: {
    created() {
      this.$emit("save", newArticle)
    },
    template: "<span></span>",
  },
}))

import NewArticleView from "@/views/Articles/New.vue"

describe("NewArticleView", async () => {
  const router = await createTestRouter()
  router.push = vi.fn()
  render(NewArticleView, {
    global: { plugins: [router] },
  })

  it("creates an article", () => {
    expect(db.articles).toContain(newArticle)
  })

  it("redirects to new article show", () => {
    expect(router.push).toHaveBeenCalledWith({
      name: "article",
      params: { id: 2 },
    })
  })
})
