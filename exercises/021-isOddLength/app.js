// Write your function here
const isOddLength = (word) => {
    if (word.length % 2 != 0) return true
    else return false
}

let output = isOddLength('special');
console.log(output); // --> true