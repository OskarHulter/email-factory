import { test, expect } from "bun:test"

test("snapshot", () => {
  expect({ foo: "bar" }).toMatchSnapshot()
})
