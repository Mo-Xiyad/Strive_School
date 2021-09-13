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
    if (n1 > n2) {
        return n1
    } else if (n2 > n3) {
        return n2
    } else {
        return n3
    }
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
let num = [2, 2]
function arrayConcent(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 1 || array[i] === 3) {
            return true
        } else {
            return false
        }
    }
}
// console.log(arrayConcent(num))


/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3.
    Return `true` if it doesn't, `false` if it does. */
let n = [4, 3]
function doesNotContainN(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 1 && array[i] !== 3) {
            return true
        } else {
            return false
        }
    }

}

// console.log(doesNotContainN(n))

/* 11. Create a function to find the longest string from a given array of strings.
    Pass the array as parameter and return the longest string. */
let strings = ['hey', 'this', 'is', 'a', 'string']
function longestString(array) {
    for (let i = 0; i < array.length; i++) {
        let str = array[i]

    }
}