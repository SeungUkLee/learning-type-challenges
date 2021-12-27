import { Equal, Expect } from '@type-challenges/utils';

/* Solution */
export type MyExclude<Type, ExcludedUnion> = Type extends ExcludedUnion ? never : Type;

/* Test Cases */
export type Cases = [
  Expect<Equal<MyExclude<FooBar, 'foo'>, Exclude<FooBar, 'foo'>>>
]

type FooBar = 'foo' | 'bar';
