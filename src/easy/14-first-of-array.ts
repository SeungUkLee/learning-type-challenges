import { Equal, Expect } from '@type-challenges/utils';

/* Solution */
export type First<T extends readonly unknown[]> = T extends [] ? never : T[0];

/* Test Cases */
export type Cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<['a', 'b', 'c']>, 'a'>>,
  Expect<Equal<First<[() => 1, { foo: string }]>, () => 1>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
  Expect<Equal<First<typeof readonlyData>, 1>>
]

const readonlyData = [1, 2, 3] as const;
