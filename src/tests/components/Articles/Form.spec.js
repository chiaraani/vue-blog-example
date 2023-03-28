import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, fireEvent } from "@testing-library/vue";

import ArticleForm from "@/components/Articles/Form.vue";
import { newArticle } from "@/tests/fixtures/articles";
import { createTestRouter } from "@/tests/test-support";

vi.mock("marked", async () => ({
  marked: (value) => "marked" + value,
}));

describe("ArticleForm", () => {
  let router, wrapper;

  beforeEach(async () => {
    router = await createTestRouter();
    wrapper = render(ArticleForm, {
      global: { plugins: [router] },
    });
  });

  afterEach(() => wrapper.unmount());

  it("emits entered data", async () => {
    await fireEvent.update(
      wrapper.getByLabelText("Title", { selector: "[required]" }),
      newArticle.title
    );
    await fireEvent.update(
      wrapper.getByLabelText("Body", { selector: "[required]" }),
      newArticle.body
    );
    await fireEvent.click(wrapper.getByText("Save"));

    expect(wrapper.emitted().save).toEqual([[newArticle]]);
  });

  it("renders cancel button", () => {
    wrapper.getByText("Cancel", {
      selector: `a[href="${router.resolve({ name: "home" }).path}"]`,
    });
  });

  it("renders preview", async () => {
    await fireEvent.update(wrapper.getByLabelText("Body"), newArticle.body);
    wrapper.getByText("marked" + newArticle.body);
  });
});
