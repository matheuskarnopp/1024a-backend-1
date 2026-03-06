/**
 * Exercício 01 - cria um novo vetor com os valores do vetor original mais dois novos valores
 * Nome da função - criaNovoVetor
 * Crie uma função que retorne um novo vetor com os valores do vetor original mais dois novos valores
 * @param {number[]} vetor Vetor de números
 * @param {number} valor1 Primeiro valor a ser adicionado
 * @param {number} valor2 Segundo valor a ser adicionado
 * @returns {number[]} Retorna um novo vetor com os valores do vetor original mais dois novos valores
 * @example
 * criaNovoVetor([1, 2, 3], 4, 5) // [1, 2, 3, 4, 5]
 * criaNovoVetor([1, 2, 3], 0, 0) // [1, 2, 3, 0, 0]
 */ 

//Início do seu código

// function criaNovoVetor(vetor:number[],valor1:number, valor2:number) {
//     vetor.push(valor1, valor2)
//     return vetor

// }


// console.log(criaNovoVetor([1, 2, 3], 4, 5))
//Fim do seu código

/**
 * Exercício 02 - divisivelPor11
 * Nome da função - divisivelPor11
 * Crie uma função que retorna um array com os números divisíveis por 11 no intervalo
 * @param {number} min Número mínimo
 * @param {number} max Número máximo
 * @returns {number[]} Retorna um array com os números divisíveis por 11 no intervalo
 * @example
 *  divisivelPor11(1, 100) // [11, 22, 33, 44, 55, 66, 77, 88, 99]
 *  
 * divisivelPor11(11, 110) // [11, 22, 33, 44, 55, 66, 77, 88, 99, 110]
 */

//Início do seu código

// function divisivelPor11(min:number, max:number) {
//     let divisiveis11:number[] = []
//     for (let i = min; i < max; i++) {
//         const elementos = i
//         if (elementos % 11 == 0) {
//             divisiveis11.push(elementos)
//         }
//     }
//     return divisiveis11
// }

// console.log(divisivelPor11(1, 100))
//Fim do seu código


/**
 *  Exercício 03 - maioresDeIdade
 * Nome da função - maioresDeIdade
 * Crie uma função que retorna um array com os objetos com idade maior que 18
 * @param {vetor:Pessoa[]} vetor Vetor de objetos com id, nome e idade
 * @returns {Pessoa[]} Retorna um array com os objetos com idade maior que 18
 * @example
 * 
 * const pessoa1 = {id: 1, nome: 'João', idade: 20}
 * const pessoa2 = {id: 2, nome: 'Maria', idade: 18}
 * const pessoa3 = {id: 3, nome: 'José', idade: 17}
 * maioresDeIdade([pessoa1, pessoa2, pessoa3]) // [pessoa1, pessoa2]
 */
// interface Pessoa{
//     id: number,
//     nome: string,
//     idade: number
// }

// //Início do seu código
// function maioresDeIdade(vetor:Pessoa[]) {
//     let novoVetor:Pessoa[] = []
//     for (let i = 0; i < vetor.length; i++) {
//         const element = vetor[i];
//         if (element?.idade! >= 18) {
//             novoVetor.push(element!)
//         }
//     }
//     return novoVetor
// }
// const pessoa1 = {id: 1, nome: 'João', idade: 20}
// const pessoa2 = {id: 2, nome: 'Maria', idade: 18}
// const pessoa3 = {id: 3, nome: 'José', idade: 17}
// console.log(maioresDeIdade([pessoa1, pessoa2, pessoa3])) // [pessoa1, pessoa2]

//Fim do seu código


/**
 * Exercício 04 - resolve equação
 * Nome da função - resolveEquacao
 * Crie uma função que retorne os pontos em Y a partir de um vetor dos pontos em X da equação y = x^2 + 2x + 6
 * @param {number[]} vetor Vetor de pontos em X
 * @returns {number[]} Retorna um array com os pontos em Y
 * @example
 * resolveEquacao([1, 2, 3]) // [9, 14, 21]
 */

// //Início do seu código

//     function resolveEquacao(vetor:number[]) {
//         let vetorY:number[] = [] 
//         for (let i = 0; i < vetor.length; i++) {
            
//             const element = vetor[i];
//             let y = element! ** 2 + 2*element! +6
//             vetorY.push(y)
//         }
//         return vetorY
//     }

//     console.log(resolveEquacao([1, 2, 3])) // [9, 14, 21]
// //Fim do seu código