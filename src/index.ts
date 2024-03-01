import { KeyboardEvent, KeyboardEventHandler } from 'react';

import { SpecialKey } from './SpecialKey';

type KeyHandlerMap<T> = Partial<Record<SpecialKey, KeyboardEventHandler<T>>>;

export function useSpecialKeys<T>(handlers: KeyHandlerMap<T>) {
  return function handleSpecialKeys(event: KeyboardEvent<T>) {
    const handler = handlers[event.key as SpecialKey];

    handler && handler(event);
  }
}
