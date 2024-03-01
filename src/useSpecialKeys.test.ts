import { KeyboardEvent } from 'react';
import { useSpecialKeys } from '.';

describe('useSpecialKeys', () => {
  beforeEach(() => jest.clearAllMocks());

  it('providers working keyDown handler', () => {
    const enterEvent = {
      key: 'Enter',
      currentTarget: { } as HTMLInputElement,
    } as KeyboardEvent<HTMLInputElement>;

    const enterCallback = jest.fn();

    const escapeEvent = {
      key: 'Escape',
      currentTarget: { } as HTMLInputElement,
    } as KeyboardEvent<HTMLInputElement>;

    const escapeCallback = jest.fn();
    
    const handler = useSpecialKeys<HTMLInputElement>({
      Enter: enterCallback,
      Escape: escapeCallback,
    });

    handler(enterEvent);
    handler(escapeEvent);

    expect(enterCallback).toHaveBeenCalledWith(enterEvent);
    expect(escapeCallback).toHaveBeenCalledWith(escapeEvent);
  });
});
