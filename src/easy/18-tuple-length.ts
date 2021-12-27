import { Equal, Expect } from '@type-challenges/utils';

/* Soultion */
export type Length<T extends readonly unknown[]> = T['length'];

/* Test Cases */

export type Cases = [
  Expect<Equal<Length<tesla>, 4>>,
  Expect<Equal<Length<spaceX>, 5>>,
  Expect<Equal<Length<typeof readonlyData>, 4>>
]

type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

const readonlyData = [1, 2, 3, 4] as const
