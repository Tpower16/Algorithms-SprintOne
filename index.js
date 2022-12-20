// Sample Questions to Practice

// 1. Write a JavaScript function to check whether an `input` is an array or not

// Example One
is_array = function (input) {
    if (toString.call(input) === "[object Array]") return true;
    return false;
};
console.log(is_array(["Algorithms", "is", "awesome"]));
console.log(is_array([13, 12, 64, 960]));
console.log(is_array("13, 12, 64, 960"));

// Example Two
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

// Example One
const first = function (array, n) {
    if (array == null) return void 0;
    if (n == null) return array[0];
    if (n < 0) return [];
    return array.slice(0, n);
};

console.log(first([17, 8, 4, 19]));
console.log(first([], 76, 35, 87));
console.log(first([65, 10], 3));
console.log(first([21, 50, 20, 99], 6, 7));
console.log(first([925, 881, 111], 507));
