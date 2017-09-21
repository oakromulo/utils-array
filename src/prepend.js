// @flow

/**
 * Returns a new Array with elements prepended to the one given.
 */
const prepend = <Element>(
  elements: Array<Element>,
  array: Array<Element>
): Array<Element> => [...elements, ...array];

export default prepend;
