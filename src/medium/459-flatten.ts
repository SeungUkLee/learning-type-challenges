import { Equal, Expect } from '@type-challenges/utils'

/* Solution */
export type Flatten<A extends readonly unknown[]> = A extends [infer F, ...infer R]
  ? F extends readonly unknown[] ? [...Flatten<F>, ...Flatten<R>] : [F, ...Flatten<R>]
  : [...A]

/* Test Cases */
export type Cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<Equal<Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>, [{ foo: 'bar'; 2: 10 }, 'foobar']>>,
]

