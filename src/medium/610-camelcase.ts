import { Equal, Expect } from '@type-challenges/utils'

/* Solution */
// export type CamelCase<S extends string> = S extends `${infer F}-${infer R}`
//   ? R extends Capitalize<R> ? `${F}-${CamelCase<R>}` : `${F}${CamelCase<Capitalize<R>>}`
//   : S

export type CamelCase<S extends string> = CamelCaseIter<S, "">

type CamelCaseIter<S extends string, Acc extends string> = S extends `${infer F}-${infer R}`
  ? R extends Capitalize<R> ? CamelCaseIter<R, `${Acc}${F}-`> : CamelCaseIter<Capitalize<R>, `${Acc}${F}`>
  : `${Acc}${S}`

/* Split<'UpperCase'> -> Mapping Capitalize -> UnCapitalize first element */

// type CamelCase2<S extends string> = Join<FirstElementUnCapitalize<MappingCapitalize<Split<S, '-'>>>, "">

// type MappingCapitalize<L extends string[]> = MappingCapitalizeIter<L, []>
// type MappingCapitalizeIter<L extends string[], Acc extends string[]> = L extends [infer F, ...infer R]
//   ? F extends string 
//   ? R extends string[] 
//   ? MappingCapitalizeIter<R, [...Acc, Capitalize<F>]>
//   : never
//   : never
//   : Acc

// type FirstElementUnCapitalize<L extends string[]> = L extends [infer F, ...infer R]
//   ? F extends string
//   ? [Uncapitalize<F>, ...R]
//   : never
//   : never


/* Test Cases */
export type Cases = [
  Expect<Equal<CamelCase<'foo-bar-baz'>, 'fooBarBaz'>>,
  Expect<Equal<CamelCase<'foo-Bar-Baz'>, 'foo-Bar-Baz'>>,
  Expect<Equal<CamelCase<'foo-Bar-baz'>, 'foo-BarBaz'>>,
  Expect<Equal<CamelCase<'foo-bar'>, 'fooBar'>>,
  Expect<Equal<CamelCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<CamelCase<'foo--bar----baz'>, 'foo-Bar---Baz'>>,
  Expect<Equal<CamelCase<'a-b-c'>, 'aBC'>>,
  Expect<Equal<CamelCase<'a-b-c-'>, 'aBC-'>>,
  Expect<Equal<CamelCase<'ABC'>, 'ABC'>>,
  Expect<Equal<CamelCase<'-'>, '-'>>,
  Expect<Equal<CamelCase<''>, ''>>,
  Expect<Equal<CamelCase<'😎'>, '😎'>>,
]

// type InfiniteCase = CamelCase<'foo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-bazfoo-bar-baz'> 
