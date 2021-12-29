import { Equal, Expect } from '@type-challenges/utils';

/* Solution */
export type DeepReadonly<T> = {
  readonly [P in keyof T]: Readonly<T[P]>
};

/* Another Solution */
// @see https://github.com/type-challenges/type-challenges/issues/4543

/* Test Cases */
export type Cases = [
  Expect<Equal<Test, Expected>>
];


type Test = DeepReadonly<Foo>;
type Expected = {
  readonly x: {
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey'
}

type Foo = {
  x: {
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

