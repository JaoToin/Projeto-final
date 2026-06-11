//Comentário de uma linha

/*
    Comentários de múltiplas linhas
    É possivel ter várias 
    linhas

*/

//COMANDO DE SAÍDA
console.log("Olá mundo!!!")

//DECLARAÇÃO DE VARIÁVEL
let num = 10
var num2 = 50
const num3 = 100


console.log(num)
console.log(num2)
console.log(num3)

if (true) {
    let num4 = 250
    console.log(num4)

    var num5 = 140
}

console.log(num5)

num = 2000

console.log(num)

num2 = 58

console.log(num2)

//num3 = 20

console.log(num3)

//CONCATENAÇÃO

console.log('Valor da variavel num3 é ' + num3)
console.log("Valor da variavel num3 é " + num3)
console.log(` Valor da variavel num3 é ${num3}`)
console.log('Valor da variavel num3 é', num3)


//OPERADORES MATEMÁTICOS
/*
    + SOMA
    - SUBTRAÇÃO
    * MULTIPLICAÇÃO
    / DIVISÃO 
    % MÓDULO - RESTO DA DIVISÃO
*/
console.log('A SOMA DOS NÚMEROS É: ', 12 + 8)
console.log('A SUBTRAÇÃO ENTRE AS VARIÁVEIS É: ', num2 - num3)
console.log('A MULTIPLICAÇÃO DOS NÚMEROS É:', num2 * 5)
console.log('A DIVISÃO ENTRE OS VALORES É:', num3 / num2)
console.log(`O RESTO DA DIVISÃO ENTRE 10 E 2 É: ${10 % 2}`)

//OPERADORES RELACIONAIS
/*
    > MAIOR
    < MENOR
    >= MAIOR OU IGUAL
    <= MENOR OU IGUAL
    != DIFERENTE
*/

//OPERADORES LÓGICOS
/*
    && E
    || OU 
*/

//TESTE LÓGICO (SELEÇÃO)
let idade = 100

if (idade >= 18) {
    console.log("MAIOR DE IDADE")

} else {
    console.log("MENOR DE IDADE")
}

idade >= 18 ? console.log("MAIOR DE IDADE") : console.log("MENOR DE IDADE")

/*
    RENOVAÇÃO DA CNH
    18 ATÉ 49 -> 10 ANOS
    50 ATÉ 69 -> 5 ANOS
    70 ACIMA -> 3 ANOS
*/

//ANINHAMENTO DE IF
if (idade < 18) {
    console.log(`COM ${idade}, NÃO É PERMITIDO POSSUIR CNH `)

} else if (idade < 50) {
    console.log(`COM ${idade}, O TEMPO DE RENOVAÇÃO É DE 10 ANOS `)

} else if (idade < 70) {
    console.log(`COM ${idade}, O TEMPO DE RENOVAÇÃO É DE 5 ANOS `)

} else {
    console.log(`COM ${idade}, O TEMPO PARA RENOVAÇÃO É DE 3 ANOS `)
}

//TABELA VERDADE
/*
    CONJUNÇÃO -> && E
    VV V
    VF F
    FV F
    FF F
    
    DISJUNÇÃO -> || OU
    VV V
    VF v 
    FV V 
    FF F
*/

/**
 * AUTORIZAÇÃO DE ACESSO PARA UM AMBIENTE SEJA DO SEGUINTE MODO:
 * TER IDADE MAIOR OU IGUAL A 18 ANOS E POSSUIR MAIOR OU IGUAL R$ 1000
*/

let valor = 1500

if ((idade >= 18) && (valor >= 1000)){
    console.log("AUTORIZADO O ACESSO")
}else{
    console.log("ACESSO NEGADO")
}

