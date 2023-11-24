const { rollLudoDice } = require("promises-assignment");

// Using Promises
rollLudoDice().then(result => {
  console.log(`You rolled a ${result} on the Ludo dice.`);
});

// Using Callbacks
rollLudoDice((error, result) => {
  if (error) {
    console.error(error);
  } 
  else {
    console.log(`You rolled a ${result} on the Ludo dice.`);
  }
});
