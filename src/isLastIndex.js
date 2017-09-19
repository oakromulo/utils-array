// @flow

/**
 * Returns true if given index is the last one or false otherwise
 */
const isLastIndex = (index: number, array: Array<*>) =>
  index === array.length - 1;

export default isLastIndex;
