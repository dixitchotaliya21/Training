function checkNumber(){
    var n1 = 10
    if(n1 >= 0 || n1 < 0){
        if(n1 == 0){
            console.log("This is zero number.")
        }else if( n1 < 0 ){
            console.log("This is negative number.")
        }else{
            console.log("This is a positive number.")
        }
        
    }
}
checkNumber();