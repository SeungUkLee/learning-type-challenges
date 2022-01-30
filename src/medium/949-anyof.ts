import { Equal, Expect } from '@type-challenges/utils'
import { AnyObject, EmptyObject } from '../utils';

/* Solution */
export type AnyOf<T extends readonly unknown[]> = T extends [infer F, ...infer R]
  ? isIdentityElement<F> extends true ? AnyOf<R> : true
  : false;

type isIdentityElement<T> =
  T extends boolean ? T extends false ? true : false
  : T extends number ? T extends 0 ? true : false
  : T extends string ? T extends '' ? true : false
  : T extends unknown[] ? T extends [] ? true : false
  : T extends AnyObject ? T extends EmptyObject ? true : false
  : false

/* Test Cases */

export type Cases = [
  Expect<Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>>,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>>,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Expect<Equal<AnyOf<[0, '', false, [], {}]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>,
]


