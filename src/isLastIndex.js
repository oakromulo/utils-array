// @flow

import {curry} from "./fun";

/**
 * Returns true if given index is the last one or false otherwise.
 */
const isLastIndex = (array: Array<any>, index: number): boolean =>
  index === array.length - 1;

export default curry(isLastIndex);
