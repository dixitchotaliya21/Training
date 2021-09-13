var n1 = 200
var n2 = 100
var n3 = 200
if((n1 < n2) && (n1 < n3) ){
    console.log( n1 + " is a smallest number.")
}
if((n2 < n1) && (n2 < n3) ){
    console.log( n2 + " is a smallest number.")
}
if((n3 < n2) && (n1 > n3) ){
    console.log( n3 + " is a smallest number.")
}
if(n1 == n2 == n3){
    console.log( n1 + "All number are same.")
}