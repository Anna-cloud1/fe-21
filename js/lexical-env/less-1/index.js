//

// global lex env

// {
// "environmentRecord": {
// "message": "text",
// "weight": 66,
// run: function,
// sum: (a, b) => a + b;
//   }
// "outher": null
//
//}

// run lex env
// {
// "environmentRecord": {

//   }
// "outher": global lex env
//
//}

/* eslint-disable */

const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

const sum = (a, b) => a + b;

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
    console.log('Done');
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

if (weight) {
  const price = 100;
  console.log('My weight is ' + weight);
}

const messanger = createMessenger();
messanger.sendMessage('Jack');
run();

// ===================

function counterFunc() {
  let count = 0;

  const counter = () => {
    count += 1;
    console.log(count);
  };

  return counter;
}

const counter1 = counterFunc();
counter1();
counter1();
counter1();
const counter2 = counterFunc();
counter2();
counter2();



// counterFunc lex env
// {
// "environmentRecord": {

// }, 

// "outher": global lex env
// }