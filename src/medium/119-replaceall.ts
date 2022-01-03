import { Equal, Expect } from '@type-challenges/utils'

/* Solution */
type ReplaceAll<S extends string, From extends string, To extends string> =
  From extends EmptyString
  ? S
  : _ReplaceAll<S, From, To, ''>

type _ReplaceAll<
  S extends string,
  From extends string,
  To extends string,
  Acc extends string
  > = S extends `${infer F}${From}${infer L}`
  ? _ReplaceAll<L, From, To, `${Acc}${F}${To}`>
  : `${Acc}${S}`;

type EmptyString = '';

/* Test Cases */
export type Cases = [
  Expect<Equal<ReplaceAll<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobar', 'bag', 'foo'>, 'foobar'>>,
  Expect<Equal<ReplaceAll<'foobarbar', 'bar', 'foo'>, 'foofoofoo'>>,
  Expect<Equal<ReplaceAll<'t y p e s', ' ', ''>, 'types'>>,
  Expect<Equal<ReplaceAll<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<ReplaceAll<'barfoo', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobarfoobar', 'ob', 'b'>, 'fobarfobar'>>,
  Expect<Equal<ReplaceAll<'foboorfoboar', 'bo', 'b'>, 'foborfobar'>>,
  Expect<Equal<ReplaceAll<'', '', ''>, ''>>,
]
