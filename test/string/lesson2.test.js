import findStr from '../../code/string/lesson2'

test('test find the sub string', () => {
  expect(findStr('00110011')).toEqual(['0011', '01', '1100', '10', '0011', '01'])
})
