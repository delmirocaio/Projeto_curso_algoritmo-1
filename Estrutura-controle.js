/* escreval("Digite o nome do aluno: ")
   leia (nome)
   escreval("Digite a nota da P1 do aluno: ")
   leia (nota01)
   escreval("Digite a nota da P2 do aluno: ")
   leia (nota02)
   media := nota01 + nota02 / 2
   
   se media >= 5  entao
      escreval ("aprovado ", nome)
   senao
        escreval ("se fudeu amigo, vai pra PS", nome)
   fimse
   */

   var nome, nota01, nota02, media;
   nome = prompt("Digite o nome do Aluno: "+nome)
   nota01 = prompt("digite a nota da PS1: "+nota01)
   nota02 = prompt("digite a nota da PS2: "+nota02)

   media = (parseInt(nota01)+parseInt(nota02)) / 2

   if (media >= 7) 
   alert("vc foi aprovado! "+nome)
    else
    alert("vai ter fazer a PS amigo... "+nome)