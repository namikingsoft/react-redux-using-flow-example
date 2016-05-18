// @flow
import assert from "power-assert"
import SingleValue from "utils/SingleValue"

describe("SingleValue", () => {
  let single: SingleValue<number>

  before(() => {
    single = new SingleValue(1234)
  })

  describe("new", () => {
    it("should be return new instance", () => {
      assert(single instanceof SingleValue)
    })
  })

  describe("valueOf", () => {
    it("should be return initial value", () => {
      assert(single.valueOf() === 1234)
    })
  })

  describe("toString", () => {
    it("should be return initial value to String", () => {
      assert(single.toString() === "1234")
    })
  })

  describe("equals", () => {
    it("should be return initial value to String", () => {
      const yes = (new SingleValue(1234): SingleValue<number>)
      const no = (new SingleValue(12345): SingleValue<number>)
      assert(single.equals(yes))
      assert(!single.equals(no))
      assert(single !== yes)
    })
  })
})
