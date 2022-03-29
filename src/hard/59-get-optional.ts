import { Equal, Expect } from '@type-challenges/utils'
import { AnyObject } from '../utils'
import { OptionalKeys } from './90-optional-keys'

/* Solution */
export type GetOptional<T extends AnyObject> = Pick<T, OptionalKeys<T>>

/* Test Cases */
export type Cases = [
  Expect<Equal<GetOptional<{ foo: number, bar?: string }>, { bar?: string }>>,
  Expect<Equal<GetOptional<{ foo: undefined, bar?: undefined }>, { bar?: undefined }>>,
]
