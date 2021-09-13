exports.calculate = function(value){
    this.value = value

    exports.divide = function(a){
        this.value=this.value/a;
        return this;
    };
    
    
    exports.add = function(b){
        this.value=this.value+b;
        return this;
    };
    
    exports.multiply = function(c){
        this.value=this.value*c;
        return this;
    };
    exports.sub = function(d){
        this.value=this.value-d;
        return this;
    };
    exports.toString = function(){
        return this.value.toString();
    };
};

