/* 
&& -> false && true -> false
|| -> true && false -> true
*/

//AND | &&
console.log('Davi' && true && 'Miguel' && 2 + 2); // Retorna a última expressão verdadeira
console.log('Davi' && null && 'Miguel' && false); // Retorna o primeiro valor falso

//OR | ||
console.log(NaN || 'Opa' || undefined || 'Jime'); // Retorna o primeiro valor verdadeiro
console.log(NaN || null || undefined || false); // Retorna o último valor falso
