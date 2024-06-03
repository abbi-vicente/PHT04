// Synchronous Programming
/* console.log("first");
console.log("second");
console.log("third"); */

// Asynchronous Programming
/* console.log("First");

setTimeout(() => {
  console.log("Second");
}, 2000);

console.log("Third"); */

// JS Callback
/* const getData = (callback) => {
  setTimeout(() => {
    const data = "This is the data.";
    callback(data);
  }, 2000);
};

const processData = (data) => {
  console.log("Processed data: ", data);
};

getData(processData); */

// Callback Hell
/* const step1 = (callback) => {
  setTimeout(() => {
    console.log("Step 1 complete");
    callback();
  }, 1000);
};

const step2 = (callback) => {
  setTimeout(() => {
    console.log("Step 2 complete");
    callback();
  }, 1000);
};

const step3 = (callback) => {
  setTimeout(() => {
    console.log("Step 3 complete");
    callback();
  }, 1000);
}; */

// Nested Callback
/* step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps completed");
    });
  });
}); */

// Promises
const step1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 1 complete.");
      resolve();
    }, 1000);
  });
};

const step2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 2 complete.");
      resolve();
    }, 1000);
  });
};

const step3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 3 complete.");
      resolve();
    }, 1000);
  });
};

// Chain promises
/* step1()
  .then(step2)
  .then(step3)
  .then(() => {
    console.log("All steps complete");
  })
  .catch((error) => {
    console.error("An error occurred: ", error);
  }); */

// Async/await
const performSteps = async () => {
  try {
    await step1();
    await step2();
    await step3();
    console.log("All steps complete");
  } catch (error) {
    console.error("An error occurred: ", error);
  }
};

performSteps();
