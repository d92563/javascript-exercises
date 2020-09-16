const repeatString = function(str, n) {
if (n === 0) {
    return "";
} else if (n < 0) {
    return "ERROR";
  } else {
    let result = "";
    for (let i = 1; i <= n; i++) {
       result += str;
    } 
    return result;
}
 
}

module.exports = repeatString
