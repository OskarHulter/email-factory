/// <reference lib="dom" />
import { expect, mock, test } from 'bun:test'

const random = mock(() => Math.random())
const randomMultipliedBy = mock((multiplier: number) => multiplier * Math.random())
// The result of mock() is a new function that's been decorated with some additional properties.

test('random', async () => {
  const val = random()
  expect(val).toBeGreaterThan(0)
  expect(random).toHaveBeenCalled()
  expect(random).toHaveBeenCalledTimes(1)
})

test('randomMultipliedBy', async () => {
  const doubled = randomMultipliedBy(2)
  const tenX = randomMultipliedBy(10)

  expect(randomMultipliedBy).toHaveBeenCalled()
  expect(randomMultipliedBy).toHaveBeenCalledTimes(2)

  expect(randomMultipliedBy.mock.calls).toEqual([[2], [10]])
  expect(randomMultipliedBy.mock.calls).toBeArrayOfSize(2)

  expect(randomMultipliedBy.mock.results).toEqual([
    { type: 'return', value: doubled },
    { type: 'return', value: tenX },
  ])
  expect(randomMultipliedBy.mock.results[1]).toEqual({ type: 'return', value: tenX })
})
