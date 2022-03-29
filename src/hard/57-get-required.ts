import { Equal, Expect } from '@type-challenges/utils'
import { AnyObject } from '../utils'
import { RequiredKeys } from './89-required-keys'

/* Solution */
export type GetRequired<T extends AnyObject> = Pick<T, RequiredKeys<T>>

/* Test Cases */
export type Cases = [
  Expect<Equal<GetRequired<{ foo: number, bar?: string }>, { foo: number }>>,
  Expect<Equal<GetRequired<{ foo: undefined, bar?: undefined }>, { foo: undefined }>>,
]

