/* BLOCO DE NOTAS:
o objetivo deste código é recriar o sistema de aprovação de notas do ibmec turbinado:
na segunte foram, primeiro temos a P1, depois a P2 (40pts)e em seguia nota de trabalho (10pts)
total abaixo de 30 = dispensado; de 31 a 69, faz ps e tem a subtituir a menor nota e ressomar pra ver se foi 
aprovado; de 70 a 100 aprovado; +100 o sistema da como invalido

talvez tudo dentro do código vai ficar bagunçado, é melhor ir construindo funções e substituindo
*/
function acaoBotao(){
    var nome, p1, p2, trabalho, ps, total, totalps
    
        nome = prompt("Digite o nome do aluno: ")
        p1 = prompt("Digite a nota da P1: ")
        p2 = prompt("Digite a nota da P2: ")
        trabalho = prompt("Digite a nota do trabalho: ")

        total == parseInt(p1) + parseInt(p2) + parseInt(trabalho)

        if (total >= 70){
            alert("Voce foi aprovado! "+ nome)
        } 
                
            
        



}
