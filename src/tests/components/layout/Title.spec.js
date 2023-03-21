import { describe, it, expect } from "vitest";
import { render } from "@testing-library/vue";

document.title = "My site";
import Title from "@/components/layout/Title.vue";

describe("MetaTags", () => {
  const wrapper = render(Title, { slots: { default: "Hello" } });

  it("renders title of page", () => {
    expect(document.title).toEqual("Hello - My site");
  });
  it("renders heading one", () => {
    wrapper.getByText("Hello", { selector: "h1" });
  });
  it("changes title of page when it is called again", () => {
    render(Title, { slots: { default: "Bye" } });
    expect(document.title).toEqual("Bye - My site");
  });
});
