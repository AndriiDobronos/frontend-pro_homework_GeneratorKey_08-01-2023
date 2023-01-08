"use strict";
//Реалізуйте функцію generateKey(length, characters),
// яка повертає рядок випадкових символів із набору characters
// довжиною length. span>
//Наприклад:
//console.log(generateKey(length,characters))
//console.log(key); // eg599gb60q926j8i
const characters = (['abcdefghijklmnopqrstuvwxyz0123456789']).join(",")
const length = 16
const sourceArr = []
const key = generateKey(length, characters)
function generateKey(length,characters) {
    let j = 0
    while (j < length) {
        const numberPosition = 36
        function getRandomInt(numberPosition) {
            return Math.floor(Math.random() * numberPosition)
        }
        sourceArr.push(characters[Math.floor(Math.random() * numberPosition)])
        j = j + 1
    }
    return sourceArr.join('')
}
//alert(generateKey(length,characters))
console.log(key)
