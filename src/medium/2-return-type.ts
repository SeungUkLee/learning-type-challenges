import { Equal, Expect } from '@type-challenges/utils';

/* Solution */
export type MyReturnType<Fn extends (...args: never) => unknown> = Fn extends (...args: never) => infer R ? R : never;

/* Test Cases */
export type Cases = [
  Expect<Equal<Test, Expected>>,
]

const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type Test = MyReturnType<typeof fn>
type Expected = ReturnType<typeof fn>
