// import { Equal, Expect } from '@type-challenges/utils'

/* Solution */
// type Permutation<T extends readonly unknown[]> = ;

// @see https://github.com/type-challenges/type-challenges/issues/614

/* Test Cases */
// export type Cases = [
//   Expect<Equal<Permutation<'A'>, ['A']>>,
//   Expect<Equal<Permutation<'A' | 'B' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>,
//   Expect<Equal<Permutation<'B' | 'A' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>,
//   Expect<Equal<Permutation<never>, []>>,
// ]

