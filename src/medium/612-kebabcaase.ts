import { Equal, Expect } from '@type-challenges/utils'
import { Join } from './5310-join';

export type KebabCase<S extends string> = Lowercase<Join<SplitUpperCase<S>, '-'>>;

type SplitUpperCase<S extends string> = SplitUpperCaseIter<S, [], []>;

type SplitUpperCaseIter<S extends string, Acc extends readonly unknown[], Stack extends readonly unknown[]> =
  S extends `${infer F}${infer R}`
  ? IsCapitalLetter<F> extends true
  ? Stack['length'] extends 0
  ? SplitUpperCaseIter<R, Acc, [F]>
  : SplitUpperCaseIter<R, [...Acc, Join<Stack, "">], [F]>
  : SplitUpperCaseIter<R, Acc, [...Stack, F]>
  : [...Acc, Join<Stack, "">]

type IsCapitalLetter<A extends string> = A extends CapitalLetter ? true : false

type CapitalLetter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I'
  | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';

/* Test Cases */

export type Cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>,
]

