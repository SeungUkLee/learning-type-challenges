import { Equal, Expect } from '@type-challenges/utils'

/* Solution */
export type StringToUnion<T extends string> = SplitAlphabets<T, []>[number]

type SplitAlphabets<S extends string, Acc extends readonly unknown[]> = S extends `${infer F}${infer R}`
  ? SplitAlphabets<R, [...Acc, F]>
  : Acc

/* Solution 2*/
// TupleToUnion<Split<T, ''>>

/* Test Cases */
export type Cases = [
  Expect<Equal<StringToUnion<"">, never>>,
  Expect<Equal<StringToUnion<"t">, "t">>,
  Expect<Equal<StringToUnion<"hello">, "h" | "e" | "l" | "l" | "o">>,
  Expect<Equal<StringToUnion<"coronavirus">, "c" | "o" | "r" | "o" | "n" | "a" | "v" | "i" | "r" | "u" | "s">>,
]
