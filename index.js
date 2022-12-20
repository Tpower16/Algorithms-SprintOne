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
