import { Alike, Expect } from '@type-challenges/utils';

/* Solution */
export type MyReadonly2<T, K extends keyof T> = Readonly<Pick<T, K>> & Omit<T, K>

/* Another Solution */
// @see https://github.com/type-challenges/type-challenges/issues/6

/* Test Cases */
export type Cases = [
  Expect<Alike<Test, Expected>>,
]

type Test = MyReadonly2<Todo, 'title' | 'description'>;

type Expected = {
  readonly title: string
  readonly description: string
  completed: boolean
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

