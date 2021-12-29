import { Equal, Expect } from '@type-challenges/utils';

/* Solution */
export type TupleToUnion<Tuple extends readonly unknown[]> = Tuple[number];

/* Test Cases */
export type Cases = [
  Expect<Equal<Test, Expected>>
];

type Test = TupleToUnion<['1', '2', '3']>;
type Expected = '1' | '2' | '3'

