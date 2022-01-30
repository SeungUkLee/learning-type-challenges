import { Equal, Expect } from '@type-challenges/utils'
import { AnyObject } from '../utils'

/* Solution */

type Diff<O extends AnyObject, O1 extends AnyObject> = {
  [K in Exclude<keyof O, keyof O1> | Exclude<keyof O1, keyof O>]: K extends keyof O
  ? O[K]
  : K extends keyof O1 ? O1[K] : never
}


/* Test Cases */

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}

export type Cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>
]

