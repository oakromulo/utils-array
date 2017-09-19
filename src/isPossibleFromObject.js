// @flow

import isKey from "./isKey";

const isPossibleFromObject = (object: Object) =>
  Object.keys(object).every(isKey);

export default isPossibleFromObject;
