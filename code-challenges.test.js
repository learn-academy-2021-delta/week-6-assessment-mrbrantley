// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

var people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("dontPanic", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    expect(dontPanic(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

//Test failed successfully

// b) Create the function that makes the test pass.

//First I want to create a function that takes in an array of objects
const dontPanic = (array) => {
  //Create a variable that turns a string of a first and last name into Proper Casing
  var properCase = (string) => {
    //Split the input string of a single string of 2 words, into an array of two elements each containing a single string/word
      return string.split(' ').map(value => {
        //Return/store the value that uses the split string, and maps across the new array applying the .toUppercase to the first character and adds it to the remaining string that has been sliced of it's first character
        return value.charAt(0).toUpperCase() + value.slice(1)
      //Re-join the split string array back into a single string
      }).join(' ') 
  }
  //Create a variable that gives us the output sentence for each element of the input array of objects. 
  var sentence = (obj) => {
    //Using the properCase variable and string interpolation with dot notation, this will store a single instance of the sentence using return. 
      //Deeper Dive: Object.values(obj) creates an array of all of the values on the input object(obj). Object.values(obj)[index] displays the value of the key:value pair at that instance on the object, like indexes on an array. This makes the code more dynamic to take in other arrays of objects that may have diffrenetly named key:value pairs. 
    return `${properCase(Object.values(obj)[0])} is ${Object.values(obj)[1]}.`
  }
  //Finally we will return a map of the sentence variable across each element of the array and store into our desired output array.
  return array.map(value => {
    return sentence(value)
  })
}

//Test passes

// var persons = [
//   { goesBy: "ford prefect", job: "a hitchhiker" },
//   { goesBy: "zaphod beeblebrox", job: "president of the galaxy" },
//   { goesBy: "arthur dent", job: "a radio employee" }
// ]
// console.log(dontPanic(persons))

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe("onlyRemainders", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    expect(onlyRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(onlyRemainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

//Test failed successfully

// b) Create the function that makes the test pass.

//First I want to create a function that takes in an array
const onlyRemainders = (array) => {
  //Next I want to filter out any values that are not data type of 'number' from the array
  var numFilter = array.filter(value => {
    return typeof value === 'number'
  })
  //Finally I want to return/store the values of mapping modulo 3 to every element in the filtered array of only numbers
  return numFilter.map(value => {
    return value % 3
  })
}

//Test passes

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("arraySum", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    expect(arraySum(cubeAndSum1)).toEqual(99)
    expect(arraySum(cubeAndSum2)).toEqual(1125)
  })
})

//Test failed successfully

// b) Create the function that makes the test pass.

//Frist I want to create a function that takes in an array
const arraySum = (array) => {
  //Next I will create a variable that cubes each element of the input array using map
  var cubedValues = array.map(value => {
    return value**3
  })
  //Finally I will return/store the value of adding each element of the cubedValues array to get the sum using the reduce method
  return cubedValues.reduce((a,b) => a + b)
}

//Test passes