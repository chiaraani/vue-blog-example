import { describe, it } from "vitest";
import { render } from "@testing-library/vue";

import SimpleLabel from "@/components/SimpleForm/Label.vue";

describe("SimpleLabel", () => {
  const wrapper = render(SimpleLabel, {
    props: { name: "title" },
  });

  it("renders capitalized name", () => {
    wrapper.getByText("Title", { selector: "label[for=title_field]" });
  });

  it("renders asterisk", () => {
    wrapper.getByText("*");
  });
});
