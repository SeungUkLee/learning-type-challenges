import { Equal, Expect } from '@type-challenges/utils'

/* Solution */
export type Without<T extends readonly unknown[], U> = WithoutIter<T, U, []>;

type WithoutIter<T extends readonly unknown[], U, Acc extends readonly unknown[]> =
  T extends [infer F, ...infer R]
  ? IsIn<F, U> extends true ? WithoutIter<R, U, Acc> : WithoutIter<R, U, [...Acc, F]>
  : Acc

type IsIn<F, U> = U extends [infer First, ...infer R]
  ? F extends First ? true : IsIn<F, R>
  : F extends U ? true : false


/* Test Cases */

export type Cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
]
