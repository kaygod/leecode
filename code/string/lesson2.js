export default (str) => {
  let arr = []
  for (let i = 0; i < str.length - 1; i++) {
    let result = countString(str.slice(i))
    if (result) {
      arr.push(result)
    }
  }
  return arr
}

function countString (str) {
  let firstParameter = str[0]
  let reverseParameter = null
  if (firstParameter === '1') {
    reverseParameter = '0'
  } else {
    reverseParameter = '1'
  }
  let index = str.indexOf(reverseParameter)
  if (index !== -1) {
    let first = str.slice(0, index)
    let second = str.slice(index, index + first.length)
    if (first.length === second.length) {
      return first + second
    } else {
      return null
    }
  } else {
    return null
  }
}
