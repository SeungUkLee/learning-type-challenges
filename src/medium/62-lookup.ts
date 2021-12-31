import { Equal, Expect } from '@type-challenges/utils'

/* Solution */
export type LookUp<U extends { type: string }, T extends string> = U extends { type: infer S }
  ? T extends S ? U : never
  : never;

/* Test Cases */
export type Cases = [
  Expect<Equal<Test, Expected>>,
  Expect<Equal<Test2, Expected2>>,
]

type Test = LookUp<Animal, 'dog'>
type Expected = Dog

type Test2 = LookUp<Animal, 'cat'>
type Expected2 = Cat

type Animal = Cat | Dog

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

