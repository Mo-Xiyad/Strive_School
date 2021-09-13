/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */

function sum(n1, n2) {
    if (n1 === n2) {
        return (n1 + n2) * 3
    } else {
        return n1 + n2
    }
}

/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */

function check(n1, n2) {
    if (n1 === 50 || n2 === 50 || n1 + n2 === 50) {
        return true
    } else {
        return false
    }
}

/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */
function characterRemove(str, position) {
    return str.slice(0, position) + str.slice(position + 1)
}
let v = " hellow a world"
// console.log(characterRemove(v, 8))


/* 4. Create a function to find and return the largest of three given integers. */

function largest(n1, n2, n3) {
    /* if (n1 > n2) {
        return n1
    } else if (n2 > n3) {
        return n2
    } else {
        return n3
    } */
    let maxNum = Math.max(n1, n2, n3)
    return maxNum
}
// console.log(largest(5, 25, 15))


/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100.
    Return `true` if they do, return `false` if one (or both) don't. */
function rangeCheck(n1, n2) {
    if (n1 >= 40 && n1 <= 60 && n2 >= 40 && n2 <= 60) {
        return true
    } else if (n1 >= 70 && n1 <= 100 && n2 >= 70 && n2 <= 100) {
        return true
    } else {
        return false
    }
}
// console.log(rangeCheck(60, 40))

/* 6. Create a function to create a new string composed of a specified number of copies of a given string.
Pass the string and the number of copies as parameters. */

function newString(str, number) {
    return ` ${str.repeat(number)}`
}
// console.log(newString(v, 5))


/* 7. Create a function to display the city name if the string begins with "Los" or "New".
    Pass the city name as a parameter. Return `false` if they start with a different string. */

function cityName(cityname) {
    if (cityname.startsWith('Los')) {
        return 'Los Angels'
    } else if (cityname.startsWith('New')) {
        return 'New York'
    } else {
        return 'No match'
    }
}
// console.log(cityName('New'))


/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements.
Pass the array as a parameter. */
let arrayOfNum = [1, 2, 3]
function sumOfAll(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

// console.log(sumOfAll(arrayOfNum))

/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3.
    Return `true` is it does, `false` if it doesn't. */
let num = [2, 2, 4, 3]
function arrayContent(array) {
    // for (let i = 0; i < array.length; i++) {
    //     if ([1, 3].includes(array[i]) && [1, 3].includes(array[i])) {
    //         console.log(array[i])
    //         return true
    //     }
    // }
    if (array.includes(1) || array.includes(3)) {
        return true
    }
    return false
}
console.log(arrayContent(num))


/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3.
    Return `true` if it doesn't, `false` if it does. */

let n = [5, 12, 45, 78, 656, 56, 99, 33, 14, 257, 56, 4, 5, 6, 7, 8, 91, 2]

function contains(array) {
    let checkFor = [1, 3];
    for (let i = 0; i < array.length; i++) {
        if (array.some(el => checkFor.includes(el)) || array.some(ai => checkFor.includes(ai))) {
            return true
        }
    }
    return false;
}
console.log(contains(n))
/* function testAray2(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        if (![1, 3].includes(arr[i]) || ![1, 3].includes(arr[i])) {
            console.log(arr[i])
            return true
        }
    }
    return false
} 
console.log(testAray2(n))
 */
// const containsOneOrThree = (array) => [1, 3].includes(array[0]) || [1, 3].includes(array[1])



/* 11. Create a function to find the longest string from a given array of strings.
    Pass the array as parameter and return the longest string. */
let strArray = ['hey', 'this', 'is', 'a', 'stringh', 'non']

function longestString(array) {
    let temp = []//getting the length of each string

    for (let i = 0; i < array.length; i++) {
        temp.push(array[i].length)//getting the length of each string and pushing it to the tem array
    }

    let longStr = [...temp].sort((a, b) => b - a)[0] // sorting out the arr from longest to smallest using sort.((a,b) => b - a) also making a copy of the tem arr
    console.log(longStr)
    console.log(temp)
    let index = temp.indexOf(longStr) //

    return array[index]
}

/* let arrayOfStrings = ['Elephantyyyyyy', 'Hippotamus', 'Rhino'];
function findLongestString(array) {
    let longestString = '';

    array.forEach(function (word) {
        if (word.length > longestString.length) {
            longestString = word;
        }
    })
    return longestString;
}
console.log(findLongestString(arrayOfStrings)) */

console.log(longestString(strArray))


/* 12. Create a function to find the types of a given angle:
  1. Acute angle â‡’ between 0 and 90 degrees. Return `acute`.
    2. Right angle â‡’ 90 degree. Return `right`
    3. Obtuse angle â‡’ between 90 and 180. Return `obtuse`
    4. Straight angle â‡’ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/


/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */

function findmaxNumber(array) {
    let max = array[0]
    let index = 0
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
            index = i
        }
    }
    return `${max}, ${index}`;
}

console.log(findmaxNumber(n))

/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */

n = [5, 12, 45, 78, 1558, 656, 56, 99, 33, 14, 257, 56, 4, 5, 6, 7, 8, 91, 2,]

function largEvenNum(array) {
    let evenNumbers = []
    let largestNumber = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNumbers.push(array[i])
        }
    }
    // console.log(evenNumbers)
    largestNumber = evenNumbers.sort((a, b) => b - a)[0]
    return largestNumber
}
console.log(largEvenNum(n))


/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative.
    Return `true` if that's the case, return `false` if it's not. */

function positiveOrNot(n1, n2) {
    if (n1 > 0 || n2 < 0) {
        return true;
    }
    return false;
}

/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case.
If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */


function changeStr(str) {
    let newstr = str.substring(0, 3).toLowerCase() + str.substring(3).toUpperCase()
    console.log(str)

    if (str.length < 3) {
        return str.toUpperCase()
    }
    return newstr
}
console.log(changeStr('this is a new string'))


/* 17. Create a function to calculate the sum of two integers (passed as parameters).
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */

function sumRange(n1, n2) {
    if (n1 + n2 > 50 && n1 + n2 < 80) {
        return 65
    } else {
        return 80
    }
}

console.log(sumRange(8, 60))

/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example:
    The number has 3 as a factor â‡’ return `Diego`
    The number has 5 as a factor â‡’ return `Riccardo`
    The number has 7 as a factor â‡’ return `Stefano`
    If the number does not have 3,5, or 7, return the original number.
    âš ï¸ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names.
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */

function numberToStr(n) {
    // let str = n.toString()
    let newStr = ''

    if (n % 3 === 0) newStr += `Diego`
    if (n % 5 === 0) newStr += `Riccardo`
    if (n % 7 === 0) newStr += `Stefano`
    return newStr
}

console.log(numberToStr())


/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */

function returnAcronym(str) {
    let string = str.split(' ')

    let acronym = []

    for (let i = 0; i < string.length; i++) {
        acronym.push(string[i].substring(0, 1)) // tacking the first string of each word
        // console.log(string[i].substring(1))
    }

    return acronym.join('')
}

console.log(returnAcronym('British Broadcasting Corporation'))