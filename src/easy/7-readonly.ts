import { Equal, Expect } from '@type-challenges/utils';

/* Solution */
export type MyReadonly<T> = { readonly [P in keyof T]: T[P] }

/* Test Cases */
export type Cases = [
  Expect<Equal<MyReadonly<Todo>, Readonly<Todo>>>
]

interface Todo {
  title: string
  description: string
  completed: boolean
}
