let fs = require('fs')
let path = require('path')
fs.mkdir(path.join(__dirname,'Dixit'),(err)=>{
    if(err){
        return console.error(err)
    }
    console.log("Directory created...")
})

fs.open('dixit.txt','w',function(err,file){
    if(err) throw err;
    console.log("File open in write mode")
})

fs.writeFile('dixit.txt', "Hello Dixit!!!", function(err,File){
    if(err) throw err;
    console.log("File created with data")
})

fs.appendFile('demo.txt', "Hello Dixit!!!", function(err,File){
    if(err) throw err;
    console.log("File Updated")
})

fs.rename('dixit.txt', "demo1.txt", function(err,File){
    if(err) throw err;
    console.log("File Renamed")
})

fs.unlink("demo1.txt", function(err,File){
    if(err) throw err;
    console.log("File Deleted")
})