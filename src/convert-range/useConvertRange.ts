// file: src/convert-range/useConvertRange.ts

export type TRange = { min: number; max: number }

export const useConvertRange = (originalRange: TRange, targetRange: TRange, precision: number = 2) => {
  if (typeof originalRange !== 'object') {
    throw new Error('useConvertRange EXCEPTION: invalid originalRange argument.')
  }
  if (typeof targetRange !== 'object') {
    throw new Error('useConvertRange EXCEPTION: invalid targetRange argument.')
  }

  const convertRange = (value: number, overridePrecision?: number): number => {
    if (!isNaN(overridePrecision as any)) {
      precision = Number(`${overridePrecision}`)
    }
    const oldMin = originalRange.min
    const oldMax = originalRange.max
    const newMin = targetRange.min
    const newMax = targetRange.max
    const newValue = ((value - oldMin) * (newMax - newMin)) / (oldMax - oldMin) + newMin
    return Number(newValue.toFixed(precision))
  }

  return {
    convertRange
  }
}
