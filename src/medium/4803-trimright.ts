import { Equal, Expect } from '@type-challenges/utils'

/* Solution */
type TrimRight<S extends string> = S extends `${infer R}${WhiteSpaces}` ? TrimRight<R> : S;
type WhiteSpaces = ' ' | '\n' | '\t';

/* Test Cases */
export type Cases = [
  Expect<Equal<TrimRight<'str'>, 'str'>>,
  Expect<Equal<TrimRight<'str '>, 'str'>>,
  Expect<Equal<TrimRight<'str     '>, 'str'>>,
  Expect<Equal<TrimRight<'     str     '>, '     str'>>,
  Expect<Equal<TrimRight<'   foo bar  \n\t '>, '   foo bar'>>,
]
