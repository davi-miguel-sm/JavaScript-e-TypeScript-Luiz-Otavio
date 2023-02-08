const alunos = ['Luiz', 'Maria', 'João'];

alunos.pop(); // Remove o último elemento | const removido = alunos.pop()

alunos.shift(); // Remove o primeiro elemento | const removido = alunos.shift()

delete alunos[0]; // Apaga o elemento, mas mantém o indice

alunos.push('Jime'); // Adiciona ao final
alunos.push('Neutron');

alunos.unshift('Heisenberg'); // Adiciona no inicio

alunos.slice(0, 2); // fatia o array, retornando algumas posições .slice(inicial,final-1)

console.log(alunos);
