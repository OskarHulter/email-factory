import { expect, test } from 'bun:test'

test('snapshot', () => {
  expect({ foo: 'bar' }).toMatchSnapshot()
})
