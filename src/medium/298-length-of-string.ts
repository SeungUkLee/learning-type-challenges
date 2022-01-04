import { Equal, Expect } from '@type-challenges/utils'

/* Solution 1 */
type LengthOfString<S extends string> = _LengthOfString<S, []>
type _LengthOfString<S extends string, Acc extends string[]> = S extends `${infer F}${infer R}`
  ? _LengthOfString<R, [...Acc, F]>
  : Acc['length']

/* Solution 2 */
// Split<S, ''>['length']

/* Test Cases */
export type Cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]

