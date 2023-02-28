import { vi, expect } from "vitest";

export const spyComponent = (...components) =>
  components.forEach((component) => vi.spyOn(component, "setup"));

expect.extend({
  toHaveBeenMountedWith(component, props) {
    return {
      pass: expect(component.setup).toHaveBeenCalledWith(
        expect.objectContaining(props),
        expect.anything()
      ),
    };
  },
  toHaveBeenMounted(component) {
    return {
      pass: expect(component.setup).toHaveBeenCalled(),
    };
  },
});
