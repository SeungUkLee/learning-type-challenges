import { AnyObject } from "../utils";
import { Equal, Expect } from '@type-challenges/utils'

/* Solution */
export type RequiredKeys<T extends AnyObject> = {
  [K in keyof T]-?: T[K] extends Required<T>[K] ? K : never
}[keyof T]

/* Another Solution */
// @see https://github.com/type-challenges/type-challenges/issues/101

// type RequiredKeys<T> = {
//     [K in keyof T]-?: T extends Record<K, T[K]> ? K : never
// }[keyof T];

/* Test Cases */
export type Cases = [
  Expect<Equal<RequiredKeys<{ a: number, b?: string }>, "a">>,
  Expect<Equal<RequiredKeys<{ a: undefined, b?: undefined }>, "a">>,
  Expect<Equal<RequiredKeys<{ a: undefined, b?: undefined, c: string, d: null }>, "a" | "c" | "d">>,
  Expect<Equal<RequiredKeys<{}>, never>>
]

