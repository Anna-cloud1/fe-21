// export const timer = {
//   secondsPassed: 0,
//   minsPassed: 0,
//   interval: '',
//   startTimer() {
//     this.interval = setInterval(() => {
//       if (this.secondsPassed === 60) {
//         this.secondsPassed = 0;
//         this.minsPassed++;
//       }
//       this.secondsPassed++;
//     }, 1000);
//   },
//   getTime() {
//     if (this.secondsPassed < 10) {
//       return `${this.minsPassed}:0${this.secondsPassed}`;
//     }
//     return `${this.minsPassed}:${this.secondsPassed}`;
//   },

//   stopTimer() {
//     clearInterval(this.interval);
//   },

//   resetTimer() {
//     this.secondsPassed = 0;
//     this.minsPassed = 0;
//   },
// };
// timer.startTimer();
// console.log(timer.getTime());

function sayHi() {
  console.log(`Hello, ${this.userName}`);
}
const user = {
  userName: 'Anya',
};
//task1

const hi = sayHi.bind(user);
hi();

// task timer

const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  //   startTimer(){

  // console.log(this.secondsPassed)

  // // algo
  // //  input: callback, ms
  // //  output: number (id)
  // //

  // setInterval(function() {
  // this.secondsPassed += 1;
  // console.log(this.secondsPassed)

  // }.bind(this), 1000)},

  startTimer() {
    // lose context - case 1
    setInterval(() => {
      this.secondsPassed += 1;
      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }

      console.log(this)
    }, 1000);
  },

  getTime() {},
  stopTimer() {},

  resetTimer() {},
};

//lose context - case 2
const func = timer.startTimer();
func();
