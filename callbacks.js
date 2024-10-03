// callbacks.js

// Method to resolve a promise after 500ms
function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let success = { message: 'delayed success!' };
            resolve(success);
        }, 500);
    });
}

// Method to reject a promise after 500ms
function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            let error = { error: 'delayed exception!' };
            reject(error);
        }, 500);
    });
}

// Call both promises and handle the result
resolvedPromise()
    .then(result => console.log(result)) // Expected Output: { message: 'delayed success!' }
    .catch(error => console.error(error));

rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error)); // Expected Output: { error: 'delayed exception!' }

module.exports = { resolvedPromise, rejectedPromise };
