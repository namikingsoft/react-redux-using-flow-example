// @flow
import assert from "power-assert"

interface I {
  num: number;
  pow(): number;
}

class A { // implements I
  num: number;

  constructor(num: number) {
    this.num = num
  }

  pow(): number {
    return this.num * this.num
  }
}

function pow(instance: I): number {
  return instance.pow()
}

describe("FlowInterface", () => {
  it("should be auto implements", () => {
    const a = new A(3)
    assert(pow(a) === 9)
  })
})
