// https://adhrinae.github.io/posts/helper-types-in-typescript
export type Diff<T, U> = T extends U ? never : T
export type Filter<T, U> = T extends U ? T : never
export type Omit<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>>
export type Dig<T, U extends keyof T> = Pick<T, U>[U]
export type Overwrite<T, U> = { [P in Exclude<keyof T, keyof U>]: T[P] } & U
export type SubType<BaseType, ConditionType> = Pick<
  BaseType,
  {
    [Key in keyof BaseType]: BaseType[Key] extends ConditionType ? Key : never
  }[keyof BaseType]
>
export type UnionOverride<T, U> = Pick<T, Exclude<keyof T, keyof U>> &
  Pick<U, Exclude<keyof U, keyof T>> &
  { [P in Extract<keyof T, keyof U>]?: T[P] | U[P] }
