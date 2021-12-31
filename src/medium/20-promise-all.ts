import { Equal, Expect } from '@type-challenges/utils'

/* Solution */
declare function PromiseAll<T extends readonly unknown[]>(
  values: readonly [...T]
): Promise<{
  [K in keyof T]: T[K] extends Promise<infer U> ? U : T[K]
}>

/* Test Cases */
export type Cases = [
  Expect<Equal<Test, Expected>>,
  Expect<Equal<Test2, Expected2>>,
  Expect<Equal<Test3, Expected3>>,
]

type Test = typeof promiseAllTest1
type Expected = Promise<[1, 2, 3]>

type Test2 = typeof promiseAllTest2
type Expected2 = Promise<[1, 2, number]>

type Test3 = typeof promiseAllTest3
type Expected3 = Promise<[number, number, number]>

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])

