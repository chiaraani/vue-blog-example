import { describe, it, expect, vi } from "vitest";

import { host, findAll, findRecord, createRecord } from "@/data";
import { articles, article, newArticle } from "@/tests/fixtures/articles";

global.fetch = vi.fn();

const mockFetchRespone = (expectedPath, data) => {
  fetch.mockImplementation(async (actualPath) => {
    if (actualPath == host + expectedPath) return { json: () => data };
  });
};

mockFetchRespone("articles.json", articles);

describe("findAll", () => {
  it("returns promise resolved with all articles", async () => {
    expect(await findAll("articles")).toEqual(articles);
  });
});

describe("findRecord", () => {
  it("returns promise resolved with article found by slug", async () => {
    expect(await findRecord("articles", article.slug)).toEqual(article);
  });

  it("throws 404 error if article is not found", async () => {
    expect(
      await findRecord("articles", "Not a an ID")
      .catch(error => error.message === "404")
    ).toBe(true);
  });
});

describe('createRecord', () => {
  it('adds article to list of all articles', async () => {
    await createRecord('articles', newArticle)
    expect(
      await findAll('articles')
      .find(a => a.title === newArticle.title)
    ).toEqual(expect.objectContaining(newArticle))
  })
})
