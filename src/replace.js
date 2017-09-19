// @flow

type Replace = <Value>(
  array: Array<$Subtype<Value>>,
  index: number,
  ...values: Array<Value>
) => Array<$Supertype<Value>>;

const replace: Replace = (array, index, ...values) => [
  ...array.slice(0, index),
  ...values,
  ...array.slice(index + values.length)
];

export default replace;
