var n1 = 200
var n2 = 200
if((n1 >= 0 || n1 < 0) && (n2 >= 0 || n2 < 0)){
    if( n1 > n2){
        console.log( n2 + " is a samllest number.")
    }else if(n1 < n2){
        console.log( n1 + " is a samllest number.")
    }else{
        console.log( n1 + " " + n2 +" " +  "Both number are same.")
    }
}