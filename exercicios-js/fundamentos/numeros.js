const peso1 = 1.0
const peso2 = Number('2.0')
console.log(peso1+',', peso2)

console.log(peso1, 'é um número inteiro?', Number.isInteger(peso1))
console.log(peso2, 'é um número inteiro?', Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1*peso1+avaliacao2*peso2
const media = total/(peso1+peso2)
console.log(media) //Sem o controle de casas decimais

console.log(media.toFixed(2)) //Agora com o controle de casas decimais
console.log(media.toString()) //Agora com a função toString ele trata a variável media como texto
console.log(media.toString(2)) //Agora como eu dei uma condição específica ele vai usar apenas 2 caracteres diferente (Binário)
console.log(typeof media)
console.log(typeof Number)