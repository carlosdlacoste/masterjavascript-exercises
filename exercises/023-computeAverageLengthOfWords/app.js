// Write your function here
function computeAverageLengthOfWords (word1, word2){
    let average = (word1.length + word2.length)/2
    return average
}

let output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6