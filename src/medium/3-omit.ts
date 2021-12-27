import { Equal, Expect } from '@type-challenges/utils';

/* Solution */
export type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P]
};

/* Test Cases */
export type Cases = [
  Expect<Equal<Test, Expected>>,
]

type Test = MyOmit<Todo, 'description' | 'title'>
type Expected = Omit<Todo, 'description' | 'title'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

