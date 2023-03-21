import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/vue";

import SimpleField from "@/components/SimpleForm/Field.vue";

describe("SimpleField", () => {
  it("is bound to data.title", async () => {
    const props = { name: "title", type: "text" };
    const wrapper = render(SimpleField, { props });

    const value = "My article";
    await fireEvent.update(
      wrapper.getByLabelText("Title", {
        selector: `#${props.name}_field[name=${props.name}][required]`,
      }),
      value
    );
    expect(wrapper.emitted().update).toEqual([[value]]);
  });
});
