import { Equal, Expect } from '@type-challenges/utils';

/* Solution */
export type MyPick<T, K extends keyof T> = { [P in K]: T[P] }

/* Test Cases */
export type Cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}
