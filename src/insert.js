// @flow

type Insert = <Value>(
  array: Array<$Subtype<Value>>,
  index: number,
  ...values: Array<$Subtype<Value>>
) => Array<Value>;

const insert: Insert = (array, index, ...values) => [
  ...array.slice(0, index),
  ...values,
  ...array.slice(index + 1)
];

export default insert;
