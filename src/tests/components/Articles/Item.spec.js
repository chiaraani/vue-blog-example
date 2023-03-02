import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";

import ArticleItem from "@/components/Articles/Item.vue";
import { article } from "@/tests/fixtures/articles";
vi.mock("@/components/user-interface/summarize", async () => ({ 
  default: vi.fn( () => '*Emphasis*' )
}) )
import summarize from "@/components/user-interface/summarize";

describe("ArticleItem", () => {
  const wrapper = mount(ArticleItem, { props: { article } });

  it("renders title", () => {
    expect(wrapper.find("h2").text()).toEqual(article.title);
  });

  it("renders summary", () => {
    expect(summarize).toHaveBeenCalledWith(expect.objectContaining({ text: article.body }))
  });

  it('renders summary in HTML', () => {
    expect(wrapper.html()).toContain('<em>Emphasis</em>')
  })
});
