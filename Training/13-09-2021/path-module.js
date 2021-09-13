var path = require("path"); 

console.log('normalization : ' + path.normalize('/Dixit/..')); 

console.log('joint path : ' + path.join('/test', 'technolabs', 'node/newfolder', 'tab', '..')); 
console.log('resolve : ' + path.resolve('path_example.js')); 

console.log('ext name: ' + path.extname('path_example.js'));

console.log(path.isAbsolute('C:\\test\\demo_path.js'));


var obj = { dir: 'C:\\Users\\Refsnes', base: 'demo_path.js' }

var p = path.format(obj);
console.log(p);

console.log(path.delimiter);

var directories = path.dirname('/Users/Refsnes/demo_path.js');
console.log(directories);