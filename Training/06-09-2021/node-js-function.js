var myData = 123; 
if (true) {
   var myData = 456; 
} 
if (true) { 
    function printData() {
        var myData = 556;
        console.log(myData)
     }; 
     printData()
} 
console.log(myData); 
