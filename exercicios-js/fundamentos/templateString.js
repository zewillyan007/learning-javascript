const nome = 'Rebeca'
const concatenação = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenação, template)

//expressões ....
console.log(`1 + 1 = ${1+1}`) //mesma coisa que juntar na marra
console.log('1 + 1 =', 1+1)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`) //Provavemmente meu cérebro vai abster isso pq eu ja aprendi de outra forma kkkkkkkkkkkkkkkkk
console.log('Ei... '+up('cuidado')+'!')
console.log(2+5)