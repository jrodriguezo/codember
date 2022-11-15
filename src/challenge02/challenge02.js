const encriptedCode = '11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101'

const space = ' '

const chunks = encriptedCode.split(space)

console.log(chunks)

let words = []
TAKE_TWO_NUMBERS = 2
TAKE_THREE_NUMBERS = 3

chunks.forEach(chunk => {
  for (let i = 0; i < chunk.length;) {
    const takeNumbers = Number(chunk[i]) === 1 ? TAKE_THREE_NUMBERS : TAKE_TWO_NUMBERS
    words.push(chunk.substring(i, i + takeNumbers));
    i = i + takeNumbers
    
	}
  words.push(space)
})

console.log(words)

const translate = (decimalWords) => {
  return decimalWords.map(word => String.fromCharCode(word))
}

console.log(translate(words))