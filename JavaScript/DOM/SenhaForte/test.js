
// RegExp


let text = "Visit   W3Schools";
//let pattern = /w3schools/i;//i no regExp ignora se a string esta em letras maiusculas ou menusculas

//let pattern = /w3schools/['a-z'];//o regexp pesquisa se existe caracteres entre a e z menusculos na string

let pattern = /w3schools/i;
let result = text.match(pattern);

console.log(result)




//var re = /\w+\s/g;
var str = 'mono feefifofum regExp_'
var myRe = /feefifofum/g;
var myArray = str.match(myRe);
console.log(myArray);

var re = /[A-Z]/;//armazena uma letra que estiver entre a e z maiusculo
var str = "feefiFofum";//string com uma letra maiscula
var newStr = str.search(re);//fara uma pesquisa se dentro da string tem uma letra maiuscula e me retornara o indice da primeira letra encontrada
console.log(`indice: ${newStr}`);// indice 5