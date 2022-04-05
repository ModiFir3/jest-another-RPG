//examples to show how to use jest 

//example 1
// module.exports = function (val1, val2) {
//     if (val1 === val2) {
//         return true;
//     } else {
//         return false;
//     }
// };

//example 2
function randomNumber() {
    return Math.floor(Math.random() * 9 + 1);
}

module.exports = randomNumber;