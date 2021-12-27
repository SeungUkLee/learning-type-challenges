import { Equal, Expect } from '@type-challenges/utils';

/* Solution */
export type If<Bool, A, B> = Bool extends true ? A : B;

/* Test Cases */
export type Cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 'b'>, 'b'>>
]
