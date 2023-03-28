import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import { render, screen, fireEvent } from "@testing-library/vue";

import { articles } from "@/tests/fixtures/articles";
const db = { articles: [...articles] };
vi.doMock("@/db", () => ({ default: db }));

import { createTestRouter } from "@/tests/test-support";

import DeleteButton from "@/components/Articles/DeleteButton.vue";

describe("DeleteButton", () => {
  let router;
  beforeAll(async () => {
    document.body.innerHTML =
      "<div id='floating'></div><div id='modals'></div>";

    router = await createTestRouter();
    vi.spyOn(router, "push");

    render(DeleteButton, {
      global: { plugins: [router] },
      props: { id: 1 },
    });
  });
  afterAll(() => (document.body.innerHTML = ""));

  it("opens modal when first delete button is clicked", async () => {
    await fireEvent.click(screen.getByText(/Delete/));
    screen.getByText("Do you really want to delete this article?");
  });

  it("deletes article with given id", async () => {
    const articleToBeDeleted = db.articles[1];
    await fireEvent.click(
      screen.getByText(/Delete/, { selector: "#modals *" })
    );
    expect(db.articles).not.toContain(articleToBeDeleted);
  });

  it("redirects to home", () => {
    expect(router.push).toHaveBeenCalledWith({ name: "home" });
  });
});
