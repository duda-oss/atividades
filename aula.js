//5- Qual o valor da variável resultado após executar esse código?

// ex: function dobro(numero) {
//     return numero * 2;
//   }
  
//   let resultado = dobro(5);
  
resposta:

// valor de 10


//6- Crie uma função chamada mostrarMensagem que não recebe argumentos e apenas exibe "Bem-vindo!" no console.

function mostrarMensagem() {
    console.log("Bem-vindo!");
  }

//7-  Crie uma função chamada multiplicar que receba dois números como argumentos e retorne o resultado da multiplicação.

function multiplicar(a, b) {
  return a * b;
}

//8- O que acontece se chamarmos uma função antes de declará-la? Teste e explique o seguinte código:

// resposta:

// Ela funciona normalmente


dizerOi();

function dizerOi() {
  console.log("Oi!");
}


//9-  A função abaixo está com problema. Ela deveria retornar o valor 10, mas não retorna nada. Corrija-a:

function calcularSoma(x, y) {
  return x + y;
}

