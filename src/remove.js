// @flow

/**
 * Returns a new Array with the result of having
 * removed the specified amount (count) of elements at the given index
 */
const remove = <Element>(
  count: number,
  index: number,
  array: Array<Element>
): Array<Element> => {
  const indexToRemove = index < 0 ? array.length - index : index;

  return [
    ...array.slice(0, indexToRemove),
    ...array.slice(indexToRemove + count)
  ];
};

export default remove;
