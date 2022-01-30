import { Expect, Alike } from '@type-challenges/utils';
import { EmptyObject } from '../utils';

/* Solution */
export type Chainable = _Chainable<EmptyObject>;

type _Chainable<T extends Record<string, unknown>> = {
  option: <K extends string, V>(k: K, v: V) => T extends EmptyObject
    ? _Chainable<{ [P in K]: V }>
    : _Chainable<T & { [P in K]: V }>
  get: () => T;
};


/* Test Cases */
export type Cases = [
  Expect<Alike<Test, Expected>>
];

type Test = typeof result
type Expected = {
  foo: number
  bar: {
    value: string
  }
  name: string
}

const result = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

declare const a: Chainable

