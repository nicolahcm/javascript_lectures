// BEFORE STUDYING THE FOLLOWING:
// Given the list 

let numbers = [10,9,7]
// Try to get the list [10+3, 9+3, 7+3]






// HIGH ORDER FUNCTIONS
// Map это метод который используется на списках. 
function Add2(x) {
    return x + 2
}

let result = [1, 2, 3, 4, 5].map(Add2)

console.log(result)  // [3,4,5,6,7]


// Ex. 2
// Everyone below is birth the 1st of January.
let yearOfBirth = [2001, 2002, 1999, 2000]

// With the help of map function, return their actual ages: // result: // [23, 22, 25, 24]

// SOL: // решайте 


// Ex. 3 
let sidesLength = [10, 20, 30, 5, 2]

// Get the area of such squares, knowing that the side length is the one listed above. Expected result: [100,400,900,25,4]

// SOL: 

// The solution requires the usage of map method.


// ---->
// React: 

let texts = ["button1", "button2", "button3"] // 
// I want to get as results <div> <button> button1 </button> </div>, 
// for each element in texts: 

// SOLUTION:
texts.map(el => "<div> <button>" + el + "</button> </div>")

