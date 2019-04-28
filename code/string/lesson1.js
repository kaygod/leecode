// export default (str) => {
//   let arr = str.split(' ')
//   let result = arr.map(item => {
//     return item.split('').reverse().joint('')
//   })
//   return result.join(' ')
// }

// export default (str) => {
//   return str.split(' ').map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

// 这种方法就是告诉面试官split里面也可以用正则表达式
// export default (str) => {
//   return str.split(/\s/g).map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

// 这种方法就是使用match来实现
export default (str) => {
  return str.match(/[\w']+/g).map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}
