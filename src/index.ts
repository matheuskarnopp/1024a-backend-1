// const vetor:number[] = [1,2,3,4]
const vetor:{id:number, nome:string,idade:number}[] = [
    {id:1,nome:"tere",idade:32},
    {id:2,nome:"Marcelo",idade:17},
    {id:3,nome:"Joãozinho",idade:18},
]

//find
//const resultado = vetor.find((x) => x.idade >= 18)
//console.log(resultado)
// console.log(vetor.find((x) => x==5))

//filter
// const resultado2 = vetor.filter((x) => x.idade >= 18) 
// console.log(resultado2)

//map
const resultado3 = vetor.map((x) => x.idade) 
console.log(resultado3)