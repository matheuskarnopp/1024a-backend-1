/**
 * Exercício 01 - Calcular o quadrado de um número
 * Nome da função - calcularQuadrado
 * Crie uma função que receba um número e retorne o seu valor elevado ao quadrado.
 * @param {number} a Número a ser calculado
 * @returns {number} Retorna o quadrado do número
 * @example
 * calcularQuadrado(2) // 4
 * calcularQuadrado(-3) // 9
 */

//Início do seu código

// function calcularQuadrado(valor:number): number {
//     let valor_quadrado:number = Math.pow(valor, 2)
//     // let valor_quadrado:number = valor**2
//     return valor_quadrado

// }

// console.log(calcularQuadrado(2))
//Fim do seu código

/**
 * Exercício 02 - Verificar se um número é positivo
 * Nome da função - ehPositivo
 * Crie uma função que retorne verdadeiro se o número for maior que zero e falso caso contrário.
 * @param {number} a Número a ser verificado
 * @returns {boolean} Retorna true para positivos e false para negativos ou zero
 * @example
 * ehPositivo(2) // true
 * ehPositivo(-3) // false
 */

//Início do seu código

// function ehPositivo(valor:number):boolean {
//     if (valor > 0) {
//         return true
//     }else{
//         return false
//     }
// }
// console.log(ehPositivo(2)) // true
// console.log(ehPositivo(-3)) // false
//Fim do seu código


/**
 * Exercício 03 - Calcular média de três números
 * Nome da função - calcularMedia
 * Crie uma função que receba três números e retorne a média aritmética entre eles.
 * @param {number} a Primeiro número
 * @param {number} b Segundo número
 * @param {number} c Terceiro número
 * @returns {number} Retorna a média dos três números
 * @example
 * calcularMedia(2, 4, 6) // 4
 * calcularMedia(10, 20, 30) // 20
 */

//Início do seu código
//arrow function com retorno explicito
// const calcularMedia = (a:number, b:number, c:number):number => (a + b + c) / 3

// function calcularMedia(a:number, b:number, c:number):number {
//     let media = (a + b + c) / 3
//     return media
// }

// console.log(calcularMedia(2, 4, 6)) // 4
// console.log(calcularMedia(10, 20, 30)) // 4
//Fim do seu código

/**
 * Exercício 04 - Verificar se um ano é bissexto
 * Nome da função - ehAnoBissexto
 * Crie uma função que verifique se um ano é bissexto (divisível por 4).
 * @param {number} ano Ano a ser verificado
 * @returns {boolean} Retorna true se for bissexto e false caso contrário
 * @example
 * ehAnoBissexto(2020) // true
 * ehAnoBissexto(2021) // false
 */

//Início do seu código

// const ehAnoBissexto = (ano:number):boolean => {
//     if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
//         return true
//     }else{
//         return false
//     }
// }
// console.log(ehAnoBissexto(2020)) // true
// console.log(ehAnoBissexto(2021)) // false
//Fim do seu código


/**
 * Exercício 05 - Calcular fatorial de um número
 * Nome da função - calcularFatorial
 * Crie uma função que calcule o fatorial de um número inteiro não negativo.
 * @param {number} num Número para cálculo do fatorial
 * @returns {number} Retorna o resultado do fatorial
 * @example
 * calcularFatorial(5) // 120
 * calcularFatorial(0) // 1
 */

//Início do seu código

// function fact(n) {
//     let res = 1;
//     for (let i = 1; i <= n; i++) {
//         res *= i;
//     }
//     return res;
// }
// console.log(fact(5));

// const calcularFatorial = (num:number):number => {
//     let factorial = 1
//     for (let i = 1;  i <= num ; i++) {
//         factorial*=i
//     }
//     return factorial
// }
// console.log(calcularFatorial(5))            

//Fim do seu código



/**
 * Exercício 06 - Encontrar o menor número em um array
 * Nome da função - encontrarMenorNumero
 * Crie uma função que percorra um array de números e retorne o menor valor encontrado.
 * @param {number[]} vetor Array de números
 * @returns {number} Retorna o menor número presente no array
 * @example
 * encontrarMenorNumero([3, 1, 5, 2, 4]) // 1
 * encontrarMenorNumero([-3, -1, -5]) // -5
 */

//Início do seu código

// function encontrarMenorNumero(vetor: number[]): number {
//     const vetorNum = vetor

//     //pq eu preciso dos tres pontos para isso funcionar???????????????????
//     let menor:number = Math.min(...vetorNum)
    
//     return menor
// }
// console.log(encontrarMenorNumero([3, 1, 5, 2, 4])) // 1
//Fim do seu código


