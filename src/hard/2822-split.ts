import { Equal, Expect } from '@type-challenges/utils'

/* Solution */
export type Split<S extends string, Sep extends string> = SplitIter<S, Sep, []>

type SplitIter<S extends string, Sep extends string, Acc extends readonly unknown[]> =
  S extends `${infer K}${Sep}${infer R}`
  ? SplitIter<R, Sep, [...Acc, K]>
  : S extends `${infer K}`
  ? Sep extends '' ? Acc : [...Acc, K] : string[];


/* Test Cases */
export type Cases = [
  Expect<Equal<Split<'Hi! How are you?', 'z'>, ['Hi! How are you?']>>,
  Expect<Equal<Split<'Hi! How are you?', ' '>, ['Hi!', 'How', 'are', 'you?']>>,
  Expect<Equal<Split<'Hi! How are you?', ''>, ['H', 'i', '!', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', '?']>>,
  Expect<Equal<Split<'', ''>, []>>,
  Expect<Equal<Split<'', 'z'>, ['']>>,
  Expect<Equal<Split<string, 'whatever'>, string[]>>,
]

