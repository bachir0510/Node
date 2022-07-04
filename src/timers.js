// warking with timers
const theOneFunc = delay => {
  console.log('hello  ofter' + delay + 'seconds')
}
setTimeout(theOneFunc, 4 * 1000, 4)
setTimeout(theOneFunc, 8 * 1000, 8)

let counter = 0;
const intervalId = setInterval(() => {
  console.log('hello')
  counter += 1;

  if(counter === 5) {
    console.log('Done')
    clearInterval(intervalId)
  }
}, 1000)