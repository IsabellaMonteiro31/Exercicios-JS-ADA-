//1) Declare duas variáveis, a e b, atribuindo a elas valores booleanos diferentes. Em seguida, crie uma condição que verifica se ambas são verdadeiras.

let a = true;
let b = false;

if (a && b) {
    console.log("Ambas as variáveis são verdadeiras.");
    
} else {
    console.log("Pelo menos uma das variáveis não é verdadeira.");
}



//2) Declare duas variáveis numéricas, c e d, e realize uma operação matemática entre elas. Imprima o resultado no console.

let c = 6;
let d = 7;
let SomaVariaveis = c + d

console.log(SomaVariaveis)


//3) Declare uma variável e contendo uma string de sua escolha. Em seguida, concatene essa string com outra e imprima o resultado.

let e = "Hoje está chovendo";

let FraseConcatenada = e.concat(", melhor ficar em casa.");

console.log(FraseConcatenada)


//4) Declare duas variáveis, f e g, ambas inicializadas como undefined. Imprima no console se essas variáveis são estritamente iguais.

const f = undefined;
const g = undefined;

if (f === g) {
    console.log('f e g são estritamente iguais.');

} else {
    console.log('f e g não são estritamente iguais.');
}


//5) Declare um objeto vazio chamado c. Adicione propriedades a esse objeto, como nome e idade, e imprima o objeto no console.

let ObjetoC = { nome: "Isa", idade: 35 };

console.log(ObjetoC)


//6)Declare uma array vazia chamada d. Adicione alguns elementos a essa array e, em seguida, imprima o comprimento da array.

let d= [];

d.push("banana","maçã","melão","abacaxi");

console.log(d.length);


//7)Declare uma variável e inicializada como null. Imprima no console o tipo de e utilizando o operador typeof.

let exer7= null

console.log(typeof exer7)


//8)Troque o valor das variáveis c e d entre si. Ou seja, c deve receber o valor de d e vice-versa.

let Vc= 8;
let Vd= 3;

[Vc, Vd] = [Vd, Vc];

console.log(Vc, Vd);


//9)Crie uma variável chamada combinação e atribua a ela um valor que seja uma combinação de pelo menos dois tipos diferentes (por exemplo, um número e uma string).

let combinacao = "Hoje é dia ";
let numero = 8;

combinacao += numero;

console.log(combinacao);

