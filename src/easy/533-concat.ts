import { Equal, Expect } from '@type-challenges/utils';

/* Solution */
export type Concat<
  A extends readonly unknown[],
  B extends readonly unknown[]
  > = [...A, ...B];

/* Test Cases */
export type Cases = [
  Expect<Equal<Concat<[1], [2]>, [1, 2]>>,
  Expect<Equal<Concat<['abc', 'def'], ['ghi', 'jkl']>, ['abc', 'def', 'ghi', 'jkl']>>,
  Expect<Equal<Concat<['abc'], [1]>, ['abc', 1]>>
]

