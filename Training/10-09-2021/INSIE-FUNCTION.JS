function Person() {
    this.name = 'Jack',
        this.age = 25,
        this.sayName = function () {
            // this is accessible
            console.log(this.age);
            function innerFunc() {
                // this refers to the global object
                console.log(this.age);

            }
            innerFunc();
        }
}
let x = new Person();
x.sayName()