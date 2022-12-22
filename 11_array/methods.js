const words = ["hello", "world"]
const nums = [1, 2]
const mix = words.concat(nums)
console.log(mix)


const mapValue = number => 'son: ' + number;

const mappedValue = mix.map(mapValue)

console.log(mappedValue)