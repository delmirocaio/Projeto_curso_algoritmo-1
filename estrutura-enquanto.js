/*
Var
// Seção de Declarações das variáveis 
   nome: caractere
   idade, limite, contador: inteiro
//o contador é a variavel q controla quantas vezes vamos rodar a f(enquanto)

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
  escreva("Digite quantas pessoas terá a idade verificada: ")
  leia(limite)
  contador := 0
  enquanto contador < limite faca
           escreva("Digite o nome do elemento: ")
           leia(nome)
           escreva("Digite a idade do ", nome, ": ")
           leia(idade)
           se idade >= 18 entao
              escreva(nome," vc é de maior zé")
           senao
              escreva(nome," sai daqui di menó")
           fimse
           contador := contador + 1
  fimenquanto
  */
function acaoBotao(){
  var nome, idade, limite, contador

  limite = prompt("Digite quantas pessoas tera a idade verificada: ")
  contador = 0
  while(contador < limite){
      nome = prompt("Digite o nome do elemento: ")
      idade = prompt("Digite a idade do "+ nome + ": ")
      if(idade >= 18)
        document.getElementById("paragrafo").innerText = nome + "vc e de maior ze"
      else
        document.getElementById("paragrafo").innerText = nome + ", sai daqui di meno"
      
    contador++  
  }
}