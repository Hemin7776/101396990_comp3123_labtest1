// lowercaseWords.js

function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject("Input must be an array");
            return;
        }

        const stringArray = mixedArray
            .filter(item => typeof item === 'string')
            .map(word => word.toLowerCase());

        resolve(stringArray);
    });
}

// Example usage:
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
    .then(result => console.log(result)) // Output: ['pizza', 'wings']
    .catch(error => console.log(error));

module.exports = lowerCaseWords;
