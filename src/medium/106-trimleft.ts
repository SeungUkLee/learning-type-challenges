import { Equal, Expect } from '@type-challenges/utils'

/* Solution */
export type TrimLeft<S extends string> = S extends `${WhiteSpaces}${infer R}` ? TrimLeft<R> : S;
type WhiteSpaces = ' ' | '\n' | '\t';

/* Test Cases */

export type Cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
]

