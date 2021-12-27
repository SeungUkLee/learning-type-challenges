import { Equal, Expect } from '@type-challenges/utils';

/* Solution */
export type Push<A extends readonly unknown[], B> = [...A, B]

/* Test Cases */
export type Cases = [
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>
]

