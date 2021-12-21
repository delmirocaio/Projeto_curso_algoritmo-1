/*
Var
// Seção de Declarações das variáveis 
   valor01, valor02, resultado: real
   operacao: caractere
   

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

   escreva("Digite o primeiro valor: ")
   leia(valor01)
   escreva("Digite a operação: ")
   leia(operacao)
   escreva("Digite o segundo valor: ")
   leia(valor02)
   
   se operacao = "+" entao
      resultado := valor01 + valor02
   senao
      se operacao = "-" entao
         resultado := valor01 - valor02
      senao
         se operacao = "*" entao
         resultado := valor01 * valor02
         senao
            se operacao = "/" entao
               resultado := valor01 / valor02
            fimse
         fimse
      fimse
   fimse
   escreva("Resultado do cálculo é: ", resultado)

Fimalgoritmo
*/
var valor01, valor02, resultado, operacao;

function acaoBotao(params){
    
    valor01 = prompt("Digite o primeiro valor: ")
    operacao = prompt("Digite a operacao: ")
    valor02 = prompt("Digite o segundo valor: ")

    if (operacao == "+"){
        resultado = parseInt(valor01) + parseInt(valor02)
    } else if(operacao == "-"){
        resultado = parseInt(valor01) - parseInt(valor02)
    } else if(operacao == "*"){
        resultado = parseInt(valor01) * parseInt(valor02)
    } else if(operacao == "/"){
        resultado = parseInt(valor01) / parseInt(valor02)
    }
    document.getElementById("paragrafo").innerText = resultado 
}
