// @flow

type ShouldProceed<Element, Result> = (
  element: Element,
  index: number,
  result: Result
) => boolean;

type Reduce<Element, Result> = (
  result: Result,
  element: Element,
  index: number
) => $Subtype<Result>;

type ReduceWhile = <Element, Result>(
  shouldProceed: ShouldProceed<Element, Result>,
  reduce: Reduce<Element, Result>,
  resultInitial: $Subtype<Result>,
  elements: Array<$Subtype<Element>>
) => Result;

const reduceWhile: ReduceWhile = (
  shouldProceed,
  reduce,
  resultInitial,
  elements
) => {
  let result = resultInitial;

  elements.every((element, index) => {
    const proceed = shouldProceed(element, index, result);

    if (proceed) {
      result = reduce(result, element, index);
    }

    return proceed;
  });

  return result;
};

export default reduceWhile;
