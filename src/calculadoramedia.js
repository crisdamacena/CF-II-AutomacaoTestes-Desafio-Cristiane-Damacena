//Escolha uma Linguagem de Programação que o Git Actions suporta, faça um teste unitário de calcular
//da média entre três notas e crie um fluxo de trabalho seguindo o passo a passo da documentação:
//
//* https://docs.github.com/pt/free-pro-team@latest/actions
//* https://docs.github.com/pt/actions/learn-github-actions/introduction-to-github-actions

function media(nota1, nota2, nota3){
    soma = nota1 + nota2 + nota3
    
    return (soma/3);
}

module.exports = {media};