// @flow

import {curry} from "./fun";

/**
 * Returns a new Array with the given size (count) filled with the specified
 * element.
 */
const repeat = <Element>(count: number, element: Element): Array<Element> =>
  [...Array(count)].map(() => element);

export default curry(repeat);
