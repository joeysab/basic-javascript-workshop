
//Question 1
function firstLetter (word){
    var letter = word.charAt(0);
    return letter;
}

// console.log(firstLetter('Hey'));


//Question 2
function lastLetter (word){
    var letter = word.charAt(word.length - 1);
    return letter
}
// console.log(lastLetter("Joe"))


//Question 3
function numPosition (string, num){
    var charAtposition = string.charAt(num)
    return charAtposition;
}
// console.log(numPosition("Salut",2))


//Question 4 -- if other than number type added function will concat both items
function addition (num1, num2){
    var total = num1 + num2;
    return total
}
// console.log(addition(2,3))


//Question 5 -- if input entered is not a number, function will return NaN
function multiplication (num1, num2) {
    var answer = num1 * num2;
    return answer;
}
// console.log(multiplication(2,5))


//Question 6
function calculator(num1,num2,operation){
    if (operation === "add"){
        return num1 + num2;
    } else if (operation === "subtract") {
        return num1 - num2;
    } else if (operation === "mult") {
        return num1 * num2;
    } else if (operation === "div") {
        return num1 / num2;
    } else {
        return 0;
    }
}
// console.log(calculator(3,4,"add"))
// console.log(calculator(3,4,"subtract"))
// console.log(calculator(3,4,"mult"))
// console.log(calculator(3,4,"div"))
// console.log(calculator(3,4,"asdasfsd"))

//Question 7
function wordRepeat(word,numOfRepeat){
    for (var i = 0; i< numOfRepeat; i++){
        console.log(word)
    }
}
//wordRepeat("hey",4)


//Question 8
function invertedString(word){
    var invert = word.split("").reverse();
    var joinAgain = invert.join("");
    return joinAgain;
}
//console.log(invertedString("Joseph"));

//Question 9
function factorial (num) {
    if (num === 0) {
        return 1
    }else if (num < 0) {
        return -1;
    }else {
        var newNum = num;
        for ( var i = num; i > 1; i--){
           newNum = newNum * (i - 1);
        }
        return newNum;
    }
}
//console.log(factorial(5));

//Question 10
function longestWordFind(sentence){
    var splitSentence = sentence.split(" ");
    var longestWord = "";
    for (var i=0; i < splitSentence.length; i++){
        if (splitSentence[i].length > longestWord.length) {
        longestWord = splitSentence[i];
            
        }
    }
    
    return longestWord;
}
//console.log(longestWordFind("hey this is joe! motherfucker"));

//Question 11
function firstUpperCase(sentence){
    var sentence = sentence.toLocaleLowerCase();
    var splitSentence = sentence.split(" ");
    var newWord = "";
    var fullSentence = []
    
    for (var i=0; i<splitSentence.length; i++){
       var upperCaseLetter = splitSentence[i].charAt(0).toUpperCase();
       newWord = upperCaseLetter + splitSentence[i].substring(1);
       fullSentence.push(newWord)
    }
    
    return fullSentence.join(' ');
}
//console.log(firstUpperCase("Hey it's JOE"))


//Question 12
function largestNum (arr){
    var largest = 0;
    for(var i = 0; i < arr.length; i++){
        if(largest < arr[i]){
            largest = arr[i];
        }
    }
    return largest;
}
console.log(largestNum([4,60,7,8]))

//Question 13

function filteredArr(array){
    var truety = [];
    for (var i=0;i<array.length; i++){
        if (array[i]){
        truety.push(array[i]);
        }
    }
    return truety;
}
console.log(filteredArr([1,2,false]))
