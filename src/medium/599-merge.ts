import { Equal, Expect } from '@type-challenges/utils'

/* Solution */
export type Merge<F extends {}, S extends {}> = {
  [K in keyof F | keyof S]: K extends keyof S
  ? S[K]
  : K extends keyof F ? F[K] : never
};

/* Test Cases */
export type Cases = [
  Expect<Equal<Merge<Foo, Bar>, {
    a: number;
    b: number;
    c: boolean;
  }>>
]

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

