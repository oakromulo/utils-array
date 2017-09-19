// @flow

const castToNumberArray = (thing: any) => (thing: Array<number>);

const getObjectLength = object =>
  Math.max(...castToNumberArray(Object.keys(object))) + 1;

const fromObject = (object: Object) =>
  Array.from(
    "length" in object ? object : {...object, length: getObjectLength(object)}
  );

export default fromObject;
