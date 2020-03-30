const escola = 'Cod3r'
console.log(escola.charAt(0)) // Posição 0 é a 1º caracter
console.log(escola.charAt(4)) //Vai me dar oa letra da posição 4 ou 5º caracter
console.log(escola.charAt(5)) //Não existe letra na posição 5 ou 6º caracter
console.log(escola.charCodeAt(3)) //Valor da letra ou número da posicão 3 na tabela ascii
console.log(escola.indexOf('o')) //Aqui é o contrário, ele mostra a posição do caracter que eu mandar

console.log(escola.substring(1)) //Vai imprimir partindo da posição 1 ou 2º caracter
console.log(escola.substring(0, 3)) //Nessa ele começa do mostra 3 caracteres partindo da posição 0
console.log('Escola '.concat(escola).concat('!')) //Faz a mesma coisa que a linha 11
console.log('Escola', escola+'!')
console.log(escola.replace(3, 'e')) //Aqui troca o caracter que eu quiser
console.log(escola.replace(escola.charAt(4), 7))
console.log(escola.replace(escola.charAt(1), 'TROCOU'))

console.log('Ana, Maria, Pedro'.split(', '))
console.log(typeof escola)