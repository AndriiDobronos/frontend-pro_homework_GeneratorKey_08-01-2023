"use strict";
//Реалізуйте функцію generateKey(length, characters),
// яка повертає рядок випадкових символів із набору characters
// довжиною length. span>
//Наприклад:
//console.log(generateKey(length,characters))
//console.log(key); // eg599gb60q926j8i
//const characters = (['abcdefghijklmnopqrstuvwxyz0123456789']).join(",")
//const characters = Array.from('abcdefghijklmnopqrstuvwxyz0123456789')
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
const length = 16
const key = generateKey(length, characters)
function generateKey(length,characters) {
    let sourceString = ""
    for (let j = 0; j < length; j++) {
        const numberPosition = characters.length
        sourceString = sourceString + characters[Math.floor(Math.random() * numberPosition)]
    }
    return sourceString
}
//alert(generateKey(key))
console.log(key)
console.log(generateKey(length, characters))
