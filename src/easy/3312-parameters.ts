import { Equal, Expect } from '@type-challenges/utils';

/* Solution */
export type MyParameters<Fn extends (...args: any) => any> = Fn extends (...args: infer P) => any ? P : never;

/* Test Cases */
export type Cases = [
  Expect<Equal<MyParameters<Test1>, Parameters<Test1>>>,
  Expect<Equal<MyParameters<Test2>, Parameters<Test2>>>,
]

type Test1 = (a: number) => string
type Test2 = (a: string, b: number) => number

