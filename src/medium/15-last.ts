import { Equal, Expect } from '@type-challenges/utils';

/* Solution */
export type Last<A extends readonly unknown[]> = A extends readonly [...unknown[], infer L] ? L : never;

/* Another Solution */
// @see https://github.com/type-challenges/type-challenges/issues/4291

/* Test Cases */
export type Cases = [
  Expect<Equal<Test, Expected>>,
  Expect<Equal<Test2, Expected2>>,
]

type Test = Last<[3, 2, 1]>;
type Expected = 1;

type Test2 = Last<[() => 123, { a: string }]>;
type Expected2 = { a: string };
