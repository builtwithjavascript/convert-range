# convert-range
Convert one range to another range

## Usage
```typescript
import { useConvertRange } from '@/convert-range/'

const originalRange = { min: 9, max: 43 }
const newRange = { min: 0.0, max: 1.0 }
const { convertRange } = useConvertRange(originalRange, newRange)

// now convert your target value to the new range
const result = convertRange(34)
console.log('result', result)
// result will be 0.74
```
