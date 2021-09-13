const arrValue = ['My', 'name', 'is', 'Jack'];
console.log(arrValue);
console.log('My' + 'name', 'is', 'Jack');
console.log(...arrValue)

const arrValue1 = ['Dixit', 'is', ...arrValue[0], ...arrValue[1]]
console.log(...arrValue1)

const arrValue2 = arrValue1
console.log(typeof arrValue2)

const arrValue3 = [...arrValue]
console.log(typeof arrValue3)

const obj1 = {
    name: "Dixit",
    salary: "50000"
};
const obj2 = { ...obj1, dob: 13 / 01 / 2000 };
// add members obj1 and obj2 to obj3
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

let func = function (...args) {
    var result = 0
    for(var i=0; i<args.length;i++){
        result += args[i]
        
        
    }
    console.log(result)
}
func(3,4,5,6,7,8); 
