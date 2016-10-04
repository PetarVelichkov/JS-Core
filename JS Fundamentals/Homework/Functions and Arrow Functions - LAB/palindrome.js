function palindrome([str]) {
    if (str === reverseString(str))
        return true;
    return false;
    function reverseString(s) {
        return s.split('').reverse().join('');
    }
}
console.log(palindrome(['ava']));