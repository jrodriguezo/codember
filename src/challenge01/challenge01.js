let fs = require('fs')

let counter = 0;
let usersTransformed = []
let newUser = ''
let lastUser = ''
let validUsers = []

try {  
    const file = fs.readFileSync('users.txt', 'utf8')
    const users = file.replaceAll(' ', ',').split(/\r?\n/)
    users.forEach(user => {
        if (user === ''){
            usersTransformed.push(newUser)
            newUser = ''
            return;
        }
        if(newUser === ''){
            newUser += user
            return;
        }
        newUser += `,${user}`
    })


    usersTransformed.forEach(user => {
        const requiredFields = ['usr', 'eme', 'psw', 'age', 'loc', 'fll']
        const users = user.split(',')
        const keyUsers = users.map(user => user.split(':')[0])

        const requiredFieldsFiltered = requiredFields.filter(reqField => !keyUsers.includes(reqField))
        const containsAllRequiredFields = requiredFieldsFiltered.length === 0
        if(containsAllRequiredFields){
            counter++
            validUsers.push(user)
            lastUser = user
        }
    })


} catch(e) {
    console.log('Error:', e.stack)
}

console.log(`Number of valid users: ${counter}`)
console.log(`Last user: ${lastUser}`)