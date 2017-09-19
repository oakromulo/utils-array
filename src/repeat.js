// @flow

type Repeat = <Value>(value: Value, count: number) => Array<$Supertype<Value>>;

const repeat: Repeat = (value, count) => [...Array(count)].map(() => value);

export default repeat;
