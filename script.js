// 1. Pegar os elementos da página
const botao = document.querySelector("#enviar");
const campoNome = document.querySelector("#nome");
const mensagem = document.querySelector("#mensagem");

// 2. Quando clicar no botão, faça isso:
botao.addEventListener("click", function () {
  // value = o texto que a pessoa digitou no campo
  const nome = campoNome.value;

  // 3. if = "se". Se o nome estiver vazio... senão (else)...
  if (nome === "") {
    mensagem.textContent = "Digite seu nome, por favor.";
    mensagem.style.color = "red";
  } else {
    mensagem.textContent = "Obrigado, " + nome + "! Seu pedido foi enviado.";
    mensagem.style.color = "green";
  }
});
