import { describe, it, expect } from "vitest"

import summarize from "@/helpers/summarize"

describe("summarize", () => {
  it("returns text straight away if it is shorter than maximum length", () => {
    const result = summarize({ maxLength: 20, text: "How are you?" })
    expect(result).toEqual("How are you?")
  })

  it("rendes text sliced by maximum and appends three dots to it", () => {
    const result = summarize({ maxLength: 7, text: "How are you?" })
    expect(result).toEqual("How are...")
  })

  it("rendes text sliced by maximum, not breaking words, and appends three dots to it", () => {
    const result = summarize({ maxLength: 10, text: "How are you?" })
    expect(result).toEqual("How are...")
  })
})
