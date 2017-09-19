// @flow

import isLastIndex from "./isLastIndex";

/**
 * Returns 0 if current index is the last one, or returns next if it is not
 */
const cycleNext = (currentIndex: number, array: Array<*>) =>
  isLastIndex(currentIndex, array) ? 0 : currentIndex + 1;

export default cycleNext;
