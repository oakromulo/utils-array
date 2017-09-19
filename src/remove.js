// @flow

type Remove = <Value>(
  array: Array<$Subtype<Value>>,
  index: number,
  count?: number
) => Array<Value>;

const remove: Remove = (array, index, count = 1) => {
  const indexToRemove = index < 0 ? array.length - index : index;

  return [
    ...array.slice(0, indexToRemove),
    ...array.slice(indexToRemove + count)
  ];
};

export default remove;
