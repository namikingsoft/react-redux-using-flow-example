// @flow

class PrivateSingleValue<T> {
  _value: T;

  constructor(value: T) {
    this._value = value
  }

  valueOf(): T {
    return this._value
  }
}

export default class SingleValue<T> extends PrivateSingleValue<T> {

  toString(): string {
    return String(this.valueOf())
  }

  equals(target: SingleValue<T>): boolean {
    return this.valueOf() === target.valueOf()
  }
}
