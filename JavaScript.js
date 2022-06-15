function abrirNome() {
  const nomeJogador = prompt("Digite seu nome para começar");
  alert("Bem vindo ao nosso site Sr(a)" + nomeJogador);

  document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector(".nomeUsuario").innerHTML = nomeJogador;
  });
}
//Rodar função. 
abrirNome();

function validarResposta1() {
//  console.log('Entrou na função')

  if (document.querySelector("input[name = questao1]:checked").value == "2020") {
    alert("Parabéns você acertou! A Organização Mundial de Saúde (OMS) declarou estado de  pandemia em 11 de março de 2020. ");
  } else {
    alert("Que pena você errou! A Organização Mundial de Saúde (OMS) declarou estado de  pandemia em 11 de março de 2020.");
  }
}

function validarResposta2() {
  //console.log('Entrou na função2')

  if (document.querySelector("input[name = questao2]:checked").value =="Lave as mãos, evite aglomerações, evite tocar nos olhos, e na boca.") {
    alert("Parabéns você acertou! Para mais informações sobre como se proteger, acesse o link disponível abaixo das questões.");
  } else {
    alert("Que pena você errou! Para mais informações sobre como se proteger, acesse o link disponível abaixo das questões.");
  }
}

