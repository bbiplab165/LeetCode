var isValid = function(s) {
    var complement = {
        ')': '(',
        '}': '{' ,
        ']': '['
    }
    var stack = []
    for (bracket of s) {
        if (stack.length === 0 || stack[stack.length - 1] !== complement[bracket]) {
            stack.push(bracket)
        } else {
            stack.pop()
        }
    }
    return stack.length === 0
};

console.log(isValid("()")); // Output: "fl"
console.log(isValid("({{})"));