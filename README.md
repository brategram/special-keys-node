useSpecialKeys
==============

Installation
------------

```
npm -i special-keys-node
```
or
```
yarn add special-keys-node
```

Usage
-----

```typescript
import { useSpecialKeys } from 'special-keys-node';

const handleKeyDown = useSpecialKeys<HTMLInputElement>({
  Enter: event => console.log(event.currentTarget.value),
  Escape: event => console.log(event.currentTarget.value),
});
```
