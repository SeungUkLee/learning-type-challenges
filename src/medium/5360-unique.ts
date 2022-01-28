import { Equal, Expect } from '@type-challenges/utils'

/* Solution */

type Unique<T extends readonly unknown[]> = UniqueIter<T, []>

type UniqueIter<T extends readonly unknown[], Acc extends readonly unknown[]> =
  T extends [infer F, ...infer R]
  ? IsUnique<F, Acc> extends true ? UniqueIter<R, [...Acc, F]> : UniqueIter<R, Acc>
  : Acc

type IsUnique<T, L extends readonly unknown[]> = L extends [infer F, ...infer R]
  ? T extends F ? false : IsUnique<T, R>
  : true;

/* Test Cases */

export type Cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, "a", 2, "b", 2, "a"]>, [1, "a", 2, "b"]>>
]

