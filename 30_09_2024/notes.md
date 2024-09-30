# 1. Filter in JavaScript:

Exercise 1: 

```
let a = [1, 2, 3, 4, 18, 20, 31, 7, 5]

// Get as result  [18, 20, 31], all the numbers >= 10 
```


Exercise 2: 
```
let a = ["oleg", "olya", "mark", "katy", "lera", "maksim", "elly", "nicolay", "sasha"]

// Filter all the names that start with 
// "ol": ["oleg", "olya"]
// "m": ["maksim", "mark"]
// That end with 
// "a": ["olya", "lera", "sasha"]
// "y": ["katy", "elly", "nicolay"]
// That contain exactly one letter:
// "a": ["olya", "katy", "lera", "maksim", "nicolay"]
```

Exercise 3:

```
let people = [
{   
    "name": "nicola",
    "age": 20,
    "city": "rostov",
    "gender": "male"
},
{
    "name": "oleg",
    "age": 17,
    "city": "kiev",
    "gender": "male"
},
{
    "name": "alisa",
    "age": 24,
    "city": "kiev",
    "gender": "female"
},
    "name": "anna",
    "age": 21,
    "city": "rostov",
    "gender": "female"
]

// Filter all the people that 
// 1. are girls:
//    [{"name": "alisa", ...}, 
//    {"name": "anna", ...}]
// 2. older than 18: 
//    [{"name": "nicola", ...}, 
//     {"name": "alisa", ...},
//     {"name": "anna", ...}]
// 3. are from the city of Rostov: 
//    [{"name": "nicola", ...}, 
//     {"name": "anna", ...}]
// 4. their name ends with "a":
//    [{"name": "nicola", ...}, 
//     {"name": "alisa", ...},
//     {"name": "anna", ...}]
```


