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

type ReduceIf = <Element, Result>(
  filter: Filter<Element, Result>,
  reduce: Reduce<Element, Result>,
  resultInitial: $Subtype<Result>,
  elements: Array<$Subtype<Element>>
) => Result;

const reduceIf: ReduceIf = (filter, reduce, resultInitial, elements) =>
  elements.reduce(
    (result, element, index) =>
      filter(element, index, result) ? reduce(result, element, index) : result,
    resultInitial
  );

export default reduceIf;
