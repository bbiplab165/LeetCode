function romanToInt(s) {
    const romanToIntMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        // Step 4: Check if the current character is less than the next character
        if (i < s.length - 1 && romanToIntMap[s[i]] < romanToIntMap[s[i + 1]]) {
            // If yes, subtract the value of the current character from the value of the next character
            total -= romanToIntMap[s[i]];
        } else {
            // If no, add the value of the current character to the total value
            total += romanToIntMap[s[i]];
        }
    }

    // Step 5: Return the total value
    return total;
}

// Example usage
console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("IV")); // Output: 4
console.log(romanToInt("IX")); // Output: 9
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994
console.log(romanToInt("XL")); // Output: 40