// HIGH ORDER FUNCTIONS  F(G())
let ourList = [1, 2, 3]

let result = ourList.map(Add2)  // [1,2,3].map(Add2) // [Add2(1), Add2(2), Add2(3)]

function Add2(x) {
    return x + 2
}

console.log(result) // [3, 4, 5]

// Exercise 
let ourAges = [15, 16, 17, 18, 19, 13] // => [False, False, False, True, True, False]


function IsAdult(age) {
    return age >= 18 
}

// [ IsAdult(15), IsAdult(16), IsAdult(17), IsAdult(18), IsAdult(19), IsAdult(13)]

ourAges.map(IsAdult) 

// Shortes Version 
ourAges.map(age => age >= 18)

//  
[2003, 2004, 2005, 2006, 2007] // --> map how many years today ---> [21, 20, 19, 18, 17]

[2003, 2004, 2005, 2006, 2007].map(yearOfBirth => 2024 - yearOfBirth)


// 
// <button> YY </button> 

let textsOnButton = ["YY", "button2", "button3"]

textsOnButton.map(mainText => <div><button>{mainText}</button></div>)





