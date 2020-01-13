function curried(f, length, acc) {
  return function () {
    const combined = acc.concat(Array.prototype.slice.call(arguments))
    return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined)
  }
}

export function curry(f: Function) { // eslint-disable-line no-redeclare
  return curried(f, f.length, [])
}
