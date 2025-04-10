//1- O que aparece no console quando o seguinte código é executado?



function dizerOla() {
    console.log("Olá, mundo!");
  }
  
  dizerOla();
  
//olá mundo



//2- Qual a diferença entre declarar uma função e chamá-la? Dê um exemplo de cada.


//Declarar uma função é criar a função, definindo seu comportamento

//Chamar uma função é executá-la

function saudacao() {
    console.log("Oi!");
  }


//3- O que essa função faz? Ela tem retorno?

function mostrarNome(nome) {
    console.log("Seu nome é: " + nome);
  }
  
  //Ela exibe no console  "Seu nome é: (nome)"
  //ela não tem retorno (não tem o return)


  //4- Reescreva a função abaixo para que ela retorne a soma em vez de apenas exibir no console.

//ex: function somar(a, b) {
//    console.log(a + b);
//  }


  function somar(a, b) {
    return a + b;
  }
  
