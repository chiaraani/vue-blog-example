import { vi, expect } from "vitest"

export const spyComponent = (...components) =>
  components.forEach((component) => vi.spyOn(component, "setup"))

expect.extend({
  toHaveBeenSetupWith(component, props) {
    return {
      pass: expect(component.setup).toHaveBeenCalledWith(
        expect.objectContaining(props),
        expect.anything()
      ),
    }
  },
  toHaveBeenSetup(component) {
    return {
      pass: expect(component.setup).toHaveBeenCalled(),
    }
  },
})
