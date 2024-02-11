//1. Encontrando o Tesouro Perdido: Você está em uma expedição em busca de um tesouro perdido. Para localizar o tesouro, você tem um mapa com pistas. Retorne a posição do elemento que representa o tesouro.

let Aventura = ["armadilhas", "piratas", "tesouro", "tempestade"]

console.log(Aventura.indexOf("tesouro"));



//2. Organizando Livros na estante: Você está organizando sua estante de livros. Retorne um array com os títulos de livros organizados em ordem alfabética.

let livros = ["As aventuras de Tom Sawyer", "Cinderela", "Bela Adormecida", "Eldorado", "Dom Casmurro"];

livros.sort();
console.log(livros);


//3. Removendo itens indesejados: Você recebeu um array de números, mas quer remover todos os números pares. Retorna um novo array apenas com os números ímpares.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let numerosImpares = numeros.filter(numeros => numeros % 2 !== 0);

console.log(numerosImpares);


//4. Qual o resultado das seguintes comparações:
const a = 5;
const b = 10;
const c = 2;

a > b && b < c;    //false
a < b && b < c;    //false
a < b || b < c;    //true
a > b && b > c;    //false
!(a > c);          // ? >> TRUE
a < b || b < c && a < c; //false >> TRUE


//5. Verificando acesso a festa:  Imagine que você é o segurança de um clube exclusivo. Os clientes devem ter mais de 18 anos para entrar. Crie um programa que verifica a idade do cliente e permite ou nega o acesso com base nessa condição. Crie um código que solicite a idade do cliente. Se a idade for maior ou igual a 18, exiba "Acesso permitido!". Caso contrário, exiba "Acesso negado!".

function RevisandoIdade() {
    let idade = prompt("Digite sua idade");

    if (idade >= 18) {
        console.log("Acesso permitido")
    } else {
        console.log("Acesso negado")
    }

}

RevisandoIdade();


//6. Decidindo o Melhor Caminho para a Escola: Você é um estudante a caminho da escola. Dependendo do clima, você pode decidir o meio de transporte mais adequado. Solicite ao usuário se está chovendo. Se estiver, exiba "Leve um guarda-chuva!". Se não estiver, exiba "Vá de bicicleta!".

function verificarTempo() {
    let tempo = prompt("Está chovendo?")

    if (tempo === "sim") {
        console.log("Leve um guarda-chuva!")
    } else {
        console.log("Vá de bicicleta!")
    }
}

verificarTempo();


//7. Calculando desconto de compra: Você está em uma loja e deseja calcular o desconto em uma compra com base no tipo de cliente. Crie um programa que, com base no tipo escolhido (normal, premium ou vip), calcule o desconto a ser aplicado sobre o valor da compra. Solicite ao usuário escolher entre "normal", "premium" e "vip" como tipos de cliente. Com base na escolha, calcule e exiba o valor final da compra após aplicar o desconto correspondente.

normal: desconto de 5 %
    premium: desconto de 10 %
        vip: desconto de 15 %

            function CalcDesconto(TipoCliente, valor) {

                switch (TipoCliente) {
                    case 'normal':
                        console.log("Valor com desconto: " + (valor - (valor * (5 / 100))));
                        break;
                    case 'premium':
                        console.log("Valor com desconto: " + (valor - (valor * (10 / 100))));
                        break;
                    case 'vip':
                        console.log("Valor com desconto: " + (valor - (valor * (15 / 100))));
                        break;
                    default:
                        console.log("Tipo de cliente inválido");
                }

            }

let TipoCliente = prompt("Digite o tipo de cliente (normal, premium ou vip):");

let valor = prompt("Digite o valor:");

CalcDesconto(tipoCliente, parseFloat(valor));



//8. Nome do produto: Você está criando um sistema de inventário e precisa registrar o nome de um novo produto. Crie um programa que solicite ao usuário informar o nome do produto e, caso não seja fornecido, atribua o valor padrão “Produto sem nome”.

function NomeProduto(produto) {
    if (produto) {
        console.log("Nome do produto:", produto);
    } else {
        console.log("Produto sem nome");
    }
}

let produto = prompt("Digite o nome do produto:");

NomeProduto(produto);