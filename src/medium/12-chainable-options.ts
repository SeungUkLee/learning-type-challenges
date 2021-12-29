import { Alike, Expect } from '@type-challenges/utils';

/* Solution */
export type Chainable<T = {}> = {
  option: <K extends string, V>(k: K, v: V) => Chainable<T & { [P in K]: V }>
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

