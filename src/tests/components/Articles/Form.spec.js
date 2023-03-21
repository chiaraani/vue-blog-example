import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/vue";

import ArticleForm from "@/components/Articles/Form.vue";
import { newArticle } from "@/tests/fixtures/articles";
import { createTestRouter } from "@/tests/test-support";

describe("ArticleForm", () => {
  it("emits entered data", async () => {
    const router = await createTestRouter();
    const wrapper = render(ArticleForm, {
      global: { plugins: [router] },
    });

    await fireEvent.update(wrapper.getByLabelText("Title"), newArticle.title);
    await fireEvent.update(wrapper.getByLabelText("Body"), newArticle.body);
    await fireEvent.click(wrapper.getByText("Save"));

    expect(wrapper.emitted().save).toEqual([[newArticle]]);
  });
});
