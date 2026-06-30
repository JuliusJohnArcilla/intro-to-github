//Global Scope
var globalVar = "I'm a global variable";
var globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

function show(){
    var functionVar = "I'm a block-scoped var";
    var functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
show();

console.log(functionVar);   // Throws ReferenceError
console.log(functionlet);   // Throws ReferenceError 
console.log(functionConst); // Throws ReferenceError

{
//Block Scope
var blockVar = "I'm a block-scoped var";
var blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar);   // Output: "I'm a global variable"
console.log(globalLet);   // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global contant"

//Block Scope
// console.log(blockVar);
// console.log(blockLet);