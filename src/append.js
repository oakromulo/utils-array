// @flow

/**
 * Returns a new Array with elements appended to the one given.
 */
const append = <Element>(
  elements: Array<Element>,
  array: Array<Element>
): Array<Element> => [...array, ...elements];

export default append;
