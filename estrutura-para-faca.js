/*
Var
// Seção de Declarações das variáveis 
   numero, fatorial, contador: real
   
 

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva("Digite o número para calcular o fatorial: ")
   leia(numero)
   fatorial := 1
   para contador de 1 ate numero faca
        fatorial := fatorial * contador
   fimpara
   escreva("o fatorial de ",numero, " é", fatorial)
   */

function acaoBotao(){   
    var numero, fatorial, contador
    /* a variavel contador, eu prefiro chamar ela de multiplicador pq fica de mais facil interptratação
    que o papal dela é ser o fator de multiplicação dentro da conta de fatorial*/
    numero = prompt("Digite o numero para calcular o fatorial: ")
    fatorial = 1
    for (var contador = 1;contador <= numero; contador++){
        fatorial = fatorial * contador 
    }

    document.getElementById("paragrafo").innerText = "O fatorial de " + numero + " e: " + fatorial
}