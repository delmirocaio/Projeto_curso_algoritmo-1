/*
Var
// Seção de Declarações das variáveis 
   nome: caractere
   numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("digite o nome: ")
   leia(nome)
   escreval("Digite o número: ")
   leia(numero)
   
   escreval(nome, " : ", numero)

Fimalgoritmo
*/
var nome, numero

nome = prompt("Digite o seu nome: ")
numero = prompt("Digite o seu número: ")

document.getElementById("paragrafo").innerText = nome + " : " + numero