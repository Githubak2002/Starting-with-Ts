// ====== PROMISES ==========

/* Promises -
  Objects that represent the eventual completion/failure of an asynchronous operation, and its resulting value. They are a way to handle asynchronous operations more easily and avoid callback hell (nested callbacks).

Anatomy of a Promise:

States:
  Pending: Initial state, neither fulfilled nor rejected. 
  Fulfilled (Resolved): The operation completed successfully.
  Rejected: The operation failed.

Actions:
  Resolve: The operation completed successfully and the promise transitions to the fulfilled state.
  Reject: The operation failed, and the promise transitions to the rejected state.

  .then(): This method is used to register a callback function that will be executed when the promise is fulfilled (resolved) successfully.
  .catch(): This method is used to register a callback function that will be executed when the promise is rejected (fails).

*/

// Function that returns a promise
function fetchDataPromis() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
      const success = true; // Simulate success/failure
      if (success) {
        const data = { name: 'John', age: 30 };
        resolve(data); // Tell the promise to complete successfully with 'data'
      } else {
        reject(new Error('Failed to fetch data')); // Tell the promise to fail with an error
      }
    }, 1000); // Simulating a delay of 1 seconds
  });
}

// Using the promise

fetchDataPromis()
  .then(data => {
    console.log('Data fetched successfully:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error.message);
  });




const fun = function(){
  return new Promise((res,rej) => {
    const success = true;

    setTimeout(() => {
      if(success)
        res("sucessfull")
      else
        rej("error")
    }, 1000);

  })
}

fun()
  .then((res) => console.log("Result: ",res))
  .catch((error) => console.log("Error: ", error))



// =========== ASYNC function with AWAIT ===========

async function fetchDataAsync() {
  try {
    let data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if (success) {
          resolve({ name: 'John', age: 30 });
        } else {
          reject(new Error('Failed to fetch data'));
        }
      }, 1000);
    });
    console.log('Data fetched successfully:', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}

// Call the async function
fetchDataAsync();








// === setTimout ===

// for (let i = 1; i <= 10; i++) {
//   (function (j) {
//     setTimeout(() => {
//       console.log(j);
//     }, j * 1000); // Use j * 1000 to stagger the timeouts
//   })(i);
// }