// @flow

type Filter<Element, Result> = (
  element: Element,
  index: number,
  result: Result
) => boolean;

type Reduce<Element, Result> = (
  result: Result,
  element: Element,
  index: number
) => $Subtype<Result>;

/**
 * Reduce the given array applying reduce function only to elements filtered
 * (the ones which by passing them to filter function, this one returned true)
 */
const reduceIf = <Element, Result>(
  filter: Filter<Element, Result>,
  reduce: Reduce<Element, Result>,
  resultInitial: $Subtype<Result>,
  array: Array<$Subtype<Element>>
): Result =>
  array.reduce(
    (result, element, index) =>
      filter(element, index, result) ? reduce(result, element, index) : result,
    resultInitial
  );

export default reduceIf;
