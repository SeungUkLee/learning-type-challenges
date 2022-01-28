import { Equal, Expect } from '@type-challenges/utils'

/* Solution */

// @see https://github.com/type-challenges/type-challenges/issues/614
type IsNever<T> = [T] extends [never] ? true : false


/* Test Cases */

export type Cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<"">, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<{}>, false>>,
]

