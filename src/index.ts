const x = [1,2,3,4]
const y = [5,6,7,8]
const z = [...x, 4.5]
console.log(z)
const xy = [...x, ...y]
console.log(xy)

const max = Math.max(...x)
console.log(max)