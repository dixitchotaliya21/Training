function sum(x = 3, y = 5) {
    return x + y;
}
function sumOfThreeNum(x = 1, y = x, z = x + y) {
    console.log( x + y + z );
}
 
    console.log(sum(5, 15)); 
    console.log(sum(7));
    console.log(sumOfThreeNum()); 
