import { Equal, Expect } from '@type-challenges/utils';

/* Solution */
export type MyAwaited<Type> = Type extends Promise<infer U> ? U : Type;

/* Test Cases */
export type Cases = [
  Expect<Equal<MyAwaited<PromiseNumber>, Awaited<PromiseNumber>>>,
  Expect<Equal<MyAwaited<PromiseString>, Awaited<PromiseString>>>,
  Expect<Equal<MyAwaited<PromiseArray>, Awaited<PromiseArray>>>,
  Expect<Equal<MyAwaited<PromiseEmptyArray>, Awaited<PromiseEmptyArray>>>,
  Expect<Equal<MyAwaited<PromiseFunction>, Awaited<PromiseFunction>>>,
  Expect<Equal<MyAwaited<PromiseUndefined>, Awaited<PromiseUndefined>>>,
  Expect<Equal<MyAwaited<PromiseNever>, Awaited<PromiseNever>>>,
]

type PromiseNumber = Promise<number>;
type PromiseString = Promise<string>;
type PromiseArray = Promise<[1, 2, 3]>
type PromiseEmptyArray = Promise<[]>
type PromiseFunction = Promise<() => 1>
type PromiseUndefined = Promise<undefined>
type PromiseNever = Promise<never>

