function strStr(haystack, needle) {
    if (needle === "") {
        return 0;
    }
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let found = true;
            for (let j = 1; j < needle.length; j++) {
                if (i + j >= haystack.length || haystack[i + j] !== needle[j]) {
                    found = false;
                    break;
                }
            }
            if (found) {
                return i;
            }
        }
    }

    return -1;
}

console.log(strStr("hello", "ll")); // Output: 2
console.log(strStr("aaaaa", "bba")); // Output: -1
