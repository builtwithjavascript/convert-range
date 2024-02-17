import { useConvertRange } from '@/convert-range/'

describe('useConvertRange', () => {
  it(`should return a defined instance`, () => {
    const originalRange = { min: 1, max: 70 }
    const targetRange = { min: 3.0, max: 5.0 }
    const instance = useConvertRange(originalRange, targetRange)
    expect(instance).toBeDefined()
  })

  it('should convert value as expected', () => {
    const inRange = { min: 9, max: 43 }
    const outRange = { min: 0.0, max: 1.0 }
    const { convertRange } = useConvertRange(inRange, outRange)
    const result = convertRange(34)
    expect(result).toBe(0.74)
  })

  it('should convert value as expected (b)', () => {
    const inRange = { min: 9, max: 43 }
    const outRange = { min: 0.0, max: 1.0 }
    const { convertRange } = useConvertRange(inRange, outRange)
    const result = convertRange(17)
    expect(result).toBe(0.24)
  })

  it('should convert at the boundaries', () => {
    const inRange = { min: 9, max: 43 }
    const outRange = { min: 0.0, max: 1.0 }
    const { convertRange } = useConvertRange(inRange, outRange)
    const result1 = convertRange(9)
    const result2 = convertRange(43)
    expect(result1).toBe(0)
    expect(result2).toBe(1)
  })
})
