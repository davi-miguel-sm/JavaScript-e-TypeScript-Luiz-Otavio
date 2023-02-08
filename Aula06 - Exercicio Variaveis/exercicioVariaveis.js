let varA = 'A', //B
	varB = 'B', //C
	varC = 'C'; //A

// let temp = varA;
// varA = varB;
// varB = varC;
// varC = temp;

[varA, varB, varC] = [varB, varC, varA]; //Destructuring

console.log(varA, varB, varC);
