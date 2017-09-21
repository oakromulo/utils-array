// @flow

/**
 * Returns true if given index is the last one or false otherwise.
 */
const isLastIndex = (array: Array<*>, index: number) =>
  index === array.length - 1;

export default isLastIndex;
