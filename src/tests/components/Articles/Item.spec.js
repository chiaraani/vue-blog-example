import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import ArticleItem from "@/components/Articles/Item.vue";
import { article } from "@/tests/fixtures/articles";
import { spyComponent } from "@/tests/test-support/expectComponentToHaveBeenMounted";
import Summarize from "@/components/user-interface/Summarize.vue";

describe("ArticleItem", () => {
  spyComponent(Summarize);
  const wrapper = mount(ArticleItem, { props: { article } });

  it("renders title", () =>
    expect(wrapper.find("h2").text()).toEqual(article.title));
  it("renders summary", () =>
    expect(Summarize).toHaveBeenMountedWith({ text: article.body }));
});
