var myData = []; 

myData.push(1); 
  
myData.push(10)
myData.unshift(2);  
console.log("Array is " + myData); 

myData[myData.length] = "fat";
myData[8] = "splat";
myData.pop()
console.log("Array length is " +myData.length)

console.log("First element is " + myData[0]); 
console.log("Array element :- ")
myData.forEach(element => {
    console.log(element)
});
for (var i = 0; i < myData.length; i++) {
    console.log(myData[i]);
}

var s = myData.join(", ");
console.log(typeof  s);


myData.unshift(1);
console.log(myData);
myData.shift();
console.log(myData);