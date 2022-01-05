import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

/* Solution */
export type Join<T extends string[], U extends string | number> = JoinIter<T, U, "">

type JoinIter<T extends unknown[], U extends string | number, Acc extends string> =
  T['length'] extends 1
  ? `${Acc}${T[0] & string}`
  : T extends [infer F, ...infer R]
  ? JoinIter<R, U, `${Acc}${F & string}${U}`>
  : `${Acc}`;

/* _____________ Test Cases _____________ */

export type Cases = [
  Expect<Equal<Join<["a", "p", "p", "l", "e"], "-">, "a-p-p-l-e">>,
  Expect<Equal<Join<["Hello", "World"], " ">, "Hello World">>,
  Expect<Equal<Join<["2", "2", "2"], 1>, "21212">>,
  Expect<Equal<Join<["o"], "u">, "o">>
]

