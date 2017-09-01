// Javascript Functions //

// 1 //
function add(n1, n2){
return n1 +n2;
}

var sub = function(n1,n2){
return n1 - n2
} 

var cb = function(n1,n2, callback){
return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

// 2 //
console.log( add(1,2) )     //  It will print 3 //
console.log( add )          // It prints the name of the function, "add" represents the function //
console.log( add(1,2,3) ) ; // It will print 3 //
console.log( add(1) );	  // It will print "Not a Number" //	
console.log( cb(3,3,add) ); // Result from the two numbers: 3+3=6 //
console.log( cb(4,3,sub) ); // Result from the two numbers: 4+3=1 //
//console.log(cb(3,3,add())); // It will throw an exception, we did not pass the function but called it instead //
console.log(cb(3,"hh",add));//  // Result from the two numbers: 3+hh=3hh (It concatenated the all parameters as strings) //

// 3 //
var cbIdiotProof = function(n1,n2, callback)
{
    try {
        if (typeof n1 !== "number" || typeof n2 !== "number")
            throw new Error("IllegalArgumentException");
        if (typeof callback !== "function")
            throw new Error("IllegalArgumentException");

        return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
    } catch (error) {
        console.log(error);
    }
};

console.log(cbIdiotProof(3,3,add()));

// 4 //
var mul = function(n1, n2)
{
    return n1 * n2;
}

console.log(cb(4, 7, mul));

// 5 //
console.log(cb(3, 8, function(n1, n2)
{
    return n1 / n2;
}));