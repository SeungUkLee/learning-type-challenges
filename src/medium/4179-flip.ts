import { Equal, Expect, NotEqual } from '@type-challenges/utils'

/* Solution */
type Flip<T extends { [K: PropertyKey]: PropertyKey | boolean }> = {
  [K in keyof T as T[K] extends boolean
    ? `${T[K]}`
    : T[K] extends PropertyKey ? T[K] : never
  ]: K
}

/* Test Cases */
export type Cases = [
  Expect<Equal<{a: 'pi'}, Flip<{pi: 'a'}>>>,
  Expect<NotEqual<{b: 'pi'}, Flip<{pi: 'a'}>>>,
  Expect<Equal<{3.14: 'pi', true: 'bool'}, Flip<{pi: 3.14, bool: true}>>>,
  Expect<Equal<{val2: 'prop2', val: 'prop'}, Flip<{prop: 'val', prop2: 'val2'}>>>,
]
