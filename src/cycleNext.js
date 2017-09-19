// @flow

import isLastIndex from "./isLastIndex";

const cycleNext = (array: Array<*>, currentIndex: number) =>
  isLastIndex(array, currentIndex) ? 0 : currentIndex + 1;

export default cycleNext;
