var x = (x, y) => console.log(x * y)
x(3, 4)


let greet = () => console.log('Hello');
greet();

let age = 50;
let welcome = (age < 18) ?
    () => console.log('Baby') :
    () => console.log('Adult');
welcome();


let d = (...n) => {
    console.log(n);
}
d(4, 6, 7);


let s = function () {
    console.log(arguments);
}
s(4, 6, 7);