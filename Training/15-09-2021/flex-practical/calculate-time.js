const doSomething = () => console.log('test')
const measureDoingSomething = () => {
  console.log(console.time('doSomething()'))
  //do something, and measure the time it takes
  doSomething()
  console.log(console.timeEnd('doSomething()'))
}
measureDoingSomething()
console.log('\x1b[33m%s\x1b[0m', 'hi!')
const function2 = () => console.trace()
const function1 = () => function2()
function1()
