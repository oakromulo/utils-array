// @flow

import insert from "./insert";
import repeat from "./repeat";

type Fill = <Value>(
  array: Array<$Subtype<Value>>,
  value: Value,
  count: number,
  from?: number
) => Array<$Supertype<Value>>;

const fill: Fill = (array, value, count, from = array.length) =>
  insert(array, from, ...repeat(value, count));

export default fill;
