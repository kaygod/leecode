import wordReverse from '../../code/string/lesson1.js'

test('testwordreverse:test the data', () => {
  expect(wordReverse('abc efg xyz')).toBe('cba gfe zyx')
})
