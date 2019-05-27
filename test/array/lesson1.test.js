import phoneNumber from "../array/lesson1.test"

test('testphonenumber:test the phone', () => {
  expect(phoneNumber('23')).toBe(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
})
