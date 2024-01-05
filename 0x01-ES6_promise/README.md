# Promises
Promises in JavaScript are used to handle asynchronous operations. A promise is an object that is used as a placeholder for the future result of an asynchronous operation. In a less formal way, we can say it is a container for a future value. A promise has three states:
1. `Pending`: Before the future value is available
2. `Settled`: The asynchronous task has finished. There are two types:
+ `Fulfilled`: A fulfilled promise is successful; the value is now available.
+ `Rejected`: A rejected promise means there has been an error during the asynchronous task.
# Why promises?
+ Promises help manage asynchronous operations, making the code more readable and maintainable.
+ They provide a cleaner alternative to callback functions, especially for handling nested asynchronous operations.

It is important to note that a promise is only settled once and from thereon, the state remain unchangeable forever. The promise will either be fulfilled or rejected but it is impossible to change that state.
# Consume promise.
When we already have a promise. example, promise returned from `fetch` API. For a promise to exist, it must be built(created). In the case of fetch API, it is the fetch that built the promise. Sometimes we have to build promises and not just consume.