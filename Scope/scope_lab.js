// Global scope
var globalVar="!'m a global variable";
let globalLet ="1'm also global, but scoped with let";
const globalConst=" I'm a global constant";
{
//Block Scope
var blockVar ="I'm a block-scoped var";
let blockLet ="I'm a block scoped let";
const blockConst ="I'm a block scoped const";
}

//Global scope
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

//Block scope
//console.log(bloclVar);
//console.log(blockLet);

function show(){
	var functionVar="function var";
	let functionLet="function let";
	const functionConst="function const";
}

show();

