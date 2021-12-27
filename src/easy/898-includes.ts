import { Equal, Expect } from '@type-challenges/utils';

/* Solution */
export type Includes<A extends readonly unknown[], B> = B extends A[number] ? true : false;

/* Anotehr Solutions */
// @see https://github.com/type-challenges/type-challenges/issues/903
// @see https://github.com/type-challenges/type-challenges/issues/1190


/* Test Cases */
export type Cases = [
  Expect<Equal<Test1, false>>,
  Expect<Equal<Test2, true>>,
  Expect<Equal<Test3, true>>
]

type Test1 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>
type Test2 = Includes<['bar', '1', '2', 'foo', 1], 'foo'>
type Test3 = Includes<[() => 1, '1', (a: number) => number], () => 1>

