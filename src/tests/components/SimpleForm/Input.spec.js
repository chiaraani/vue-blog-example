import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/vue";

import SimpleInput from "@/components/SimpleForm/Input.vue";

describe("SimpleInput", () => {
  function testInput({ name, type, selector, defaultValue, newValue }) {
    describe(`when ${name}`, () => {
      it("emits update with new value", async () => {
        const wrapper = render(SimpleInput, {
          props: { type, name, default: defaultValue },
        });

        const input = wrapper.getByDisplayValue(defaultValue, { selector });
        await fireEvent.update(input, newValue);
        expect(wrapper.emitted().update).toEqual([[newValue]]);

        wrapper.unmount();
      });
    });
  }

  testInput({
    name: "title",
    type: "text",
    selector: "input[type=text]",
    defaultValue: "previous value",
    newValue: "This is a title",
  });

  testInput({
    name: "body",
    type: "textarea",
    selector: "textarea",
    defaultValue: "previous value",
    newValue: "This is body",
  });
});
