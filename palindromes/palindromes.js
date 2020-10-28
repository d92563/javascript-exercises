const palindromes = function(str) {
    let s = str.toLowerCase().replace(/[^A-Za-z]/g, "");
    return s.split("").reverse().join("") === s;
}

module.exports = palindromes
