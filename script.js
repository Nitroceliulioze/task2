// 1. Write a function that takes two numbers (a and b) as Sum a and Return the result

function sum (a, b) {
    return a + b;
}

// 3. Write a function that takes a number (a) as argument Split a into its individual digits and return them in an array.

function digits(a) {
    return Array.from(String(a), Number);
};

//just copied from stackoverflow



// 4. Write a function that takes an array (a) and a number (n) as arguments It should return the last n elements of a

function returnLastElem(a, n) {
    return a.slice(-n);
}

const myArray = [1,2,3,4,5]
returnLastElem(myArray, 3);

// console.log(returnLastElem(myArray, 3));




// others I didn't do, but wanted to have the solutions. 



// 2. Write a function that takes a string as an argument. Extract the last 3 characters from the string. Return the result

function myfunc(str) {
    // console.log(str.slice(0, -3))
    return str.slice(0, -3)
}


// 5. Write a function that takes two arrays as arguments Merge both arrays and remove duplicate values Sort the merge result in ascending order Return the resulting array

function takeTwoArrays(arr1, arr2) {
    const mergeArr = arr1.concat(arr2).sort()
    const noDubs = [...new Set(mergeArr)]
    // console.log(noDubs)
    return noDubs
}
  
  takeTwoArrays([3, 2, 1, 3, 3], ['a', 'r', 'd'])

// 6. Write a function that takes an object (a) and a string (b) as argument  Return true if the object has a property with key 'b' Return false otherwise

function has(object, str) {
    return object ? hasOwnProperty.call(object, str) : false;
  }