
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


//Question 4 -- if other than number type added function will concat both items
function addition (num1, num2){
    var total = num1 + num2;
    return total
}
console.log(addition(2,3))


//Question 5 -- if input entered is not a number, function will return NaN
function multiplication (num1, num2) {
    var answer = num1 * num2;
    return answer;
}
console.log(multiplication(2,"Hey"))