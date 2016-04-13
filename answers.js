
//Question 1
function firstLetter (word){
    var letter = word.charAt(0);
    return letter;
}

console.log(firstLetter('Hey'));

//Question 2
function lastLetter (word){
    var letter = word.charAt(word.length - 1);
    return letter
}

console.log(lastLetter("Joe"))

//Question 3
function numPosition (string, num){
    var charAtposition = string.charAt(num)
    return charAtposition;
}
console.log(numPosition("Salut",2))