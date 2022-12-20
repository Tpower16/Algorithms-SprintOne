// Sample Questions to Practice

// 1. Write a JavaScript function to check whether an `input` is an array or not

// Example One:
is_array = function (input) {
    if (toString.call(input) === "[object Array]") return true;
    return false;
};
console.log(is_array(["Algorithms", "is", "awesome"]));
console.log(is_array([13, 12, 64, 960]));
console.log(is_array("13, 12, 64, 960"));

// Example Two:
function isArray(arr) {
    if (Array.isArray(arr)) {
        return true;
    } else {
        return false;
    }
}
console.log(isArray([1, 2, 3, 4, 4, 5, 5]));
console.log(isArray(11, 32, 33, 64, 15));
console.log(isArray([])); // Empty Array

// 2. Write a Javascript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. Eg first([7,9,0,-2]) should return 7. First([],3) should return []. First([7,9,0,-2], 3) should return [7,9,0]

// Example One:
const firstEle = function (array, n) {
    if (array == null) return void 0;
    if (n == null) return array[0];
    if (n < 0) return [];
    return array.slice(0, n);
};

console.log(firstEle([17, 8, 4, 19]));
console.log(firstEle([], 76, 35, 87));
console.log(firstEle([65, 10], 3));
console.log(firstEle([21, 50, 20, 99], 6, 7));
console.log(firstEle([925, 881, 111], 507));

// 3. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. Eg last(([7,9,0,-2]) returns -2; last(([7,9,0,-2], 3) returns [9,0,-2]

// Example One:
function lastEle(array, n) {
    if (array == null) return 0;
    if (n == null) return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
}

console.log(lastEle([83, 23, 10, -8]));
console.log(lastEle([30, 79, 56, 23], 2));
console.log(lastEle([72, 29, 87, -5], 6));

// 4. Write a simple JavaScript program to join all elements of the following array into a string. Eg myColor = ["Red", "Green", "White", "Black"] returns “Red,Green,White,Black”;

colors = ["Purple", "Yellow", "Red", "Pink", "Blue", "Violet"];

// Example One:
console.log(colors.toString());

// Example Two:
console.log(colors.join());

// Example Three:
console.log(colors.join("+"));

// 5. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8

// Example One:
// Using Regex
const num = "02546";

const regex = /([02468])([02468])/g;

console.log(num.replace(regex, "$1-$2"));

// 6. Write a JavaScript program to sort the items of an array.

// Example One:
// Sorted by alphabet a-z
let city = ["California", "Barcelona", "Paris", "Kathmandu"];
let sortedArray = city.sort();

console.log(sortedArray);

// Example Two:
// Sorted by string length
const names = ["Adam", "Joe", "Jennifer", "Steve", "Jordan"];

function length_compare(a, b) {
    return a.length - b.length;
}
names.sort(length_compare);

console.log(names);
