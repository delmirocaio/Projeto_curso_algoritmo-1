/*
Var
// Seção de Declarações das variáveis
    nota01, nota02, media: real
    nome: caractere
    passou: logico
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   passou := falso
   escreval("Digite o nome do aluno: ")
   leia (nome)
   escreval("Digite a nota da P1 do aluno: ")
   leia (nota01)
   escreval("Digite a nota da P2 do aluno: ")
   leia (nota02)
   media := nota01 + nota02 / 2

   se media >= 50  entao
      passou := verdadeiro
   fimse
   
   se (passou) && (media >= 50 || media <= 70) entao
      escreval("aprovado! ", nome)
   senao
        escreval ("reporvado! ", nome)
   fimse

Fimalgoritmo
*/

var nome, nota01, nota02, soma;

aprovado = false
reprovado = false
dispensado = false

alert("Bem-vindo ao Ibmec")

   nome = prompt("Digite o nome do Aluno: ")
   nota01 = prompt("digite a nota da PS1: ")
   nota02 = prompt("digite a nota da PS2: ")
   trabalho = prompt("Digite a nota do trabalho: ")

   soma = (parseInt(nota01)+parseInt(nota02)+parseInt(trabalho))

if (soma <=30)
   dispensado = true;
   alert("vc esta dispensado da facu "+nome)

if (disensado && (soma >= 31 && soma <= 69))
   reprovado = true;
   alert("vc está reprovado "+nome)

if (reprovado && (soma >= 70))
   aprovado = true
   alert("vc esta aprovado "+nome)

   /* deu ruim, nao sei resolver ainda 19/12*/