// @flow

const isIntGreaterThan = (number, other) =>
  Number.isInteger(number) && number >= other;

const isKey = (string: string) => isIntGreaterThan(Number(string), 0);

export default isKey;
