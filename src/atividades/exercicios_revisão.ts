/**
 * Remove o último elemento de um vetor de inteiros.
 * @param arr O vetor de inteiros.
 * @returns O último elemento removido.
 */
//---Adicione seu código aqui:



// function removeUltimoElemento(arr:number[]) {
//     return arr.pop()
// }
// console.log(removeUltimoElemento([1,2,3,4,5,6]))

// let arr:number[] = [1,2,3,4,5,6]
// let numeroRetirado = arr.pop()
// console.log(numeroRetirado)



//-----Fim do código*/


/**
     * @Descrição Função que adiciona um valor em um vetor.
     * @nome incluirValorNoVetor
     * @param vetor O vetor de inteiros.
     * @param valor Um valor para ser adicionado no vetor
     * @returns O vetor com o novo elemento adicionado
    */
		//---Adicione seu código aqui:
    // function incluirValorNoVetor(vetor:number[], valor:number):number[] {
    //     vetor.push(valor)
    //     return vetor
    // }
    // console.log(incluirValorNoVetor([1,2,3,4], 5))
    //-----Fim do código*/       
   
//     ATIVIDADE:
// Seguindo o exemplo a cima:

// Crie uma função chamada buscaNumero()
/**
 * Busca um numero em um vetor de number.
 * @param numeros O vetor de number.
 * @param numeroBuscado O número a ser buscado.
 * @returns O número encontrado ou -1 quando o número buscado não estiver no vetor
 */
// Crie os testes igual ao exemplo do buscaNomes

//---Adicione seu código aqui:
// Perdão pelo nome horrivel do parametro desse find, prometo melhorar
//     function buscaNumero(numeros:number[], numeroBuscado:number):number {
//         let results = numeros.find(numeroSendoBuscado => numeroSendoBuscado == numeroBuscado )
//         if (results == numeroBuscado) {
//             return numeroBuscado    
//         }else{
//             return -1
//         }
        
//     }
// console.log(buscaNumero([1,2,3,4,5], 6))
//-----Fim do código*/    


/**
 * Retorna um novo vetor contendo apenas os números ímpares de um vetor de números.
 * @param numbers O vetor de números.
 * @returns Um novo vetor contendo apenas os números ímpares.
 */

//---Adicione seu código aqui:
//function pegarNumerosImpares

// function pegarNumerosImpares(numbers:number[]):number[] {
//     let arrImpares:number[] = numbers.filter((num) => num % 2 !== 0)
   
//     return arrImpares
// }
// console.log(pegarNumerosImpares([1,2,3,4,5,6,7]))
//-----Fim do código*/


/**
 * Esta função recebe um vetor de números como entrada e retorna um novo vetor
 * function quadradoDosNumeros
 * com os números elevados ao quadrado.
 * @param vetor - Um vetor de números.
 * @returns Um novo vetor de números, com os números do vetor de entrada elevados
 * ao quadrado.
 */

//---Adicione seu código aqui:

// const quadradoDosNumeros = (vetor:number[]):number[] => {
//     let novoVetor = vetor.map((num) => num**2)
//     return novoVetor
// }

// console.log(quadradoDosNumeros([1,2,3,4,5,6]))
//-----Fim do código*/


// Crie a função para uma função que possa ser passado dois vetores para a mesma e ela 
// retorne um novo vetor utilizando spread operator com todos os números que são divisíveis 
// por 5 em typescript com os valores concatenados.

//Insira seu código aqui
//function concatenaVetor

// function concatenaVetor(vetor1:number[], vetor2:number[]) {
//     let vetoresConcat:number[] = [...vetor1, ...vetor2]
//     let vetorDivisiveisPor5:number[] = vetoresConcat.filter((num) => num % 5 ==0 )

//     return vetorDivisiveisPor5
// }

// console.log(concatenaVetor([1,2,3,4,5], [10,15,20,25,30]))
//fim do seu código