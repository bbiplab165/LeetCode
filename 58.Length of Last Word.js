function lengthOfLastWord(s) {
    // Remove any trailing spaces
    s = s.trim();

    // Start iterating from the end of the string
    let i = s.length - 1;
    let length = 0;

    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }

    return length;
}

console.log(lengthOfLastWord("Hello Worldzz aa"))// output:- 2