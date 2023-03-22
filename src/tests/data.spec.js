import { describe, it, expect } from "vitest";

import { findAll, findRecord, createRecord, destroyRecord } from "@/data";
import {
  articles,
  article,
  newArticle,
  expectedNewArticle,
} from "@/tests/fixtures/articles";
import { mockFetchResponse } from "@/tests/test-support";

mockFetchResponse("articles.json", articles);

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
      await findRecord("articles", "Not a an ID").catch(
        (error) => error.message === "404"
      )
    ).toBe(true);
  });
});

describe("createRecord", () => {
  it("returns new article with generated slug and id", async () => {
    expect(await createRecord("articles", newArticle)).toEqual(
      expectedNewArticle
    );
  });

  it("adds article to list of all articles", async () => {
    expect(
      (await findAll("articles")).find((a) => a.title === newArticle.title)
    ).toEqual(expectedNewArticle);
  });
});

describe("destroyRecord", () => {
  it("detroys article", async () => {
    await destroyRecord("articles", article.slug)
    expect(await findAll("articles")).not.toContain(article)
  });
});
