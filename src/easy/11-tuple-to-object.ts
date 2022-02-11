import { Equal, Expect } from '@type-challenges/utils';

/* Solution */
export type TupleToObject<T extends readonly PropertyKey[]> = {
  [P in T[number]]: P
};

/* Test Cases */

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

export type Cases = [
  Expect<Equal<TupleToObject<typeof tuple>, {
    tesla: 'tesla';
    'model 3': 'model 3';
    'model X': 'model X';
    'model Y': 'model Y';
  }>>
];
