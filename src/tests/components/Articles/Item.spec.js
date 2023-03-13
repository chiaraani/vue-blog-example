import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";

import ArticleItem from "@/components/Articles/Item.vue";
import { article } from "@/tests/fixtures/articles";
vi.mock("@/helpers/summarize", async () => ({
  default: vi.fn(() => "*Emphasis*"),
}));
import summarize from "@/helpers/summarize";
import { spyComponent } from "@/tests/test-support/expectComponentToHaveBeenMounted";
import { RouterLink } from "vue-router";
import createTestRouter from "@/tests/test-support/createTestRouter";

describe("ArticleItem", async () => {
  spyComponent(RouterLink);
  const router = await createTestRouter();
  const wrapper = mount(ArticleItem, {
    global: { plugins: [router] },
    props: { article },
  });

  it("renders title", () => {
    expect(wrapper.find("h2").text()).toEqual(article.title);
  });

  it("renders summary", () => {
    expect(summarize).toHaveBeenCalledWith(
      expect.objectContaining({ text: article.body })
    );
  });

  it("renders summary in HTML", () => {
    expect(wrapper.html()).toContain("<em>Emphasis</em>");
  });

  it("is linked to article route", () => {
    expect(RouterLink).toHaveBeenMountedWith({
      to: { name: "article", params: { slug: article.slug } },
    });
  });
});
