// @flow

const convertIfNot = (thing: mixed) => (Array.isArray(thing) ? thing : [thing]);

export default convertIfNot;
