import { Equal, Expect } from '@type-challenges/utils';

/* Solution */
export type Pop<T extends readonly unknown[]> = T extends readonly [...infer R, infer _] ? [...R] : never;

/* Test Cases */
export type Cases = [
  Expect<Equal<Test, Expected>>,
  Expect<Equal<Test2, Expected2>>,
]

type Test = Pop<[3, 2, 1]>
type Expected = [3, 2]

type Test2 = Pop<['a', 'b', 'c', 'd',]>
type Expected2 = ['a', 'b', 'c']
