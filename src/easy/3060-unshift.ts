import { Equal, Expect } from '@type-challenges/utils';

/* Solution */
export type Unshift<A extends readonly unknown[], B> = [B, ...A];

/* Test Cases */
export type Cases = [
  Expect<Equal<Result, [0, 1, 2]>>
]

type Result = Unshift<[1, 2], 0> // [0, 1, 2,]

