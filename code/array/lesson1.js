function dataMap (m) {
  m = m.toString()
  switch (m) {
    case "2":
      return "abc"
    case "3":
      return "def"
    case "4":
      return "ghi"
    case "5":
      return "jkl"
    case "6":
      return "mno"
    case "7":
      return "tuv"
    case "8":
      return "wxyz"
    default:
      return ""  
  }
}

function dataHandler (arr) {
  let result = []
  for (var i = 0; i < arr[0].length; i++) {
    for (var j = 0; j < arr[1].length; j++) {
      result.push(`${arr[0][i]}${arr[1][j]}`)
    }
  }
  return result
}

function circle (arr) {
  let result = dataHandler(arr)
  arr.splice(0, 2, result)
  if (arr.length > 0) {
    circle(arr)   
  } else {
    return result
  }
}

export default (str) => {
  let arr
  arr = str.split("")
  arr.map((v, i) => {
    arr[i] = dataMap(v)    
  })
  circle(arr)
}
