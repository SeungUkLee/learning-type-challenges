import { AnyObject } from "../utils";
import { RequiredKeys } from "./89-required-keys";
import { Equal, Expect } from '@type-challenges/utils'

/* Solution */
export type OptionalKeys<T extends AnyObject> = keyof Omit<T, RequiredKeys<T>>

/* Test Cases */
export type Cases = [
  Expect<Equal<OptionalKeys<{ a: number, b?: string }>, "b">>,
  Expect<Equal<OptionalKeys<{ a: undefined, b?: undefined }>, "b">>,
  Expect<Equal<OptionalKeys<{ a: undefined, b?: undefined, c?: string, d?: null }>, "b" | "c" | "d">>,
  Expect<Equal<OptionalKeys<{}>, never>>
]
