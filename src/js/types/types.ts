import type { SetNonNullable } from 'type-fest';

type GuaranteedElements<T> = SetNonNullable<T>;

export { GuaranteedElements };
