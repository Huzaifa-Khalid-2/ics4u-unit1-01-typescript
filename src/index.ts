/**

 * The program shows how to get input

 *   and deal with numbers.

 *

 * By:      Mr. Coxall

 * Version: 1.0

 * Since:   2020-01-01

 */

import promptSync from 'prompt-sync'


const prompt = promptSync()


const name = prompt('What is your name? ')
console.log(`Hey there ${String(name)}`)
const ageString = prompt('What is your age? ')
let ageNumber = parseInt(ageString)
ageNumber = ageNumber - 10
console.log(`Age is >  ${ageNumber}`)

console.log('\nDone.')
