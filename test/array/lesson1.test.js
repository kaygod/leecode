import phoneNumber from "../../code/array/lesson1"

test('testphonenumber:test the phone', () => {
  expect(phoneNumber("23")).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
})

test('testphonenumber:test the complicateNumber', () => {
  expect(phoneNumber("234")).toEqual(["adg", "adh", "adi", "aeg", "aeh", "aei", "afg", "afh", "afi", "bdg", "bdh", "bdi", "beg", "beh", "bei", "bfg", "bfh", "bfi", "cdg", "cdh", "cdi", "ceg", "ceh", "cei", "cfg", "cfh", "cfi"])
})
