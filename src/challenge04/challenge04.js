const MIN_RANGE = 11098
const MAX_RANGE = 98123
const INDEX_POSITION = 55;
let index = 0
let fullfillsCriteria = 0;
let password55;

const containsNumberFiveAtLeastTwoTimes = (numbers) => {
  let repeated = 0
  numbers.forEach(number => {
    if(number === 5) repeated++
  })
  return repeated >= 2
}

const isIncreasing = (numbers) => {
  let isIncreasing = true;
  for(let index = 0; index < numbers.length - 1; index++){
    const currentNumber = numbers[index]
    const nextNumber = numbers[index + 1]
    if(currentNumber > nextNumber) isIncreasing = false
  }
  return isIncreasing
}

for(let number = MIN_RANGE; number < MAX_RANGE; number++){
  const numbers = (String(number)).split('').map(Number)
  if(!containsNumberFiveAtLeastTwoTimes(numbers)) continue;
  if(!isIncreasing(numbers)) continue;
  if(index === INDEX_POSITION) password55 = number
  index++
  fullfillsCriteria++
}

console.log(`Fullfills the criteria ${fullfillsCriteria} passwords and the password with index 55 is ${password55}`)