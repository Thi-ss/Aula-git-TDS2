//Criando um array de sucos
let sucos = ['Laranja', 'Uva', 'Abacaxi', 'Manga', 'Maracujá'];
console.log(sucos[0]);

//Criando um array de números
let numero = [1, 2, 3, 4, 5];
console.log(numero[2]);

//Acessando o último elemento do array
let animais = ['Cachorro', 'Gato', 'Pássaro', 'Peixe'];
console.log(animais[3]);

//Alterando um elemento do array
let times = ['Flamengo', 'Palmeiras', 'São Paulo', 'Corinthians'];
times[2] = 'Vasco';
console.log(times);

//Descobrindo o tamanho do array
let games = ['Fifa', 'Call of Duty', 'Minecraft', 'Fortnite'];
console.log(games.length);

//Adicionando um elemento ao final do array
let cores = ['Vermelho', 'Azul', 'Verde'];
cores.push('Amarelo');
console.log(cores);

//Removendo o último elemento do array
let carros = ['Fusca', 'Gol', 'Civic', 'Corola'];
carros.pop();
console.log(carros);

//Removendo o primeiro elemento do array
let cidades = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba'];
cidades.shift();
console.log(cidades);

//Adicionando um elemento ao início do array
let países = ['Brasil', 'Argentina', 'Chile'];
países.unshift('Uruguai');
console.log(países);

//Mostrando todos os elementos do array com for
let frutas = ['Maçã', 'Banana', 'Laranja', 'Uva'];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
