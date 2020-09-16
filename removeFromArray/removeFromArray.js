const removeFromArray = function(...args) {
    let arr = args[0];
    return arr.filter(elem => !args.includes(elem));

}

module.exports = removeFromArray
