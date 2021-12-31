import { Equal, Expect } from '@type-challenges/utils'

/* Solution */
export type Trim<S extends string> = TrimRight<TrimLeft<S>>

type WhiteSpaces = ' ' | '\n' | '\t';

// @see ./4803-trimright.ts
type TrimRight<S extends string> = S extends `${infer R}${WhiteSpaces}` ? TrimRight<R> : S;

// @see ./106-trimleft.ts
type TrimLeft<S extends string> = S extends `${WhiteSpaces}${infer R}` ? TrimLeft<R> : S;

/* _____________ Test Cases _____________ */

export type Cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
]
