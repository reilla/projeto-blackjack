/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de BlackJack!");

if (confirm("Quer iniciar uma nova rodada?") === false) {
  console.log("O jogo acabou");
} else {
  let cartaUsuario1 = comprarCarta();
  let cartaUsuario2 = comprarCarta();
  let cartaComputador1 = comprarCarta();
  let cartaComputador2 = comprarCarta();

  let totalUsuario = cartaUsuario1.valor + cartaUsuario2.valor;
  let totalComputador = cartaComputador1.valor + cartaComputador2.valor;

  console.log(
    `Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação ${totalUsuario} `
  );
  console.log(
    `Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${totalComputador}`
  );
  if (totalUsuario === totalComputador) {
    console.log("Empate!");
  } else if (totalUsuario > totalComputador) {
    console.log("O usuário ganhou!");
  } else {
    console.log("O computador ganhou!");
  }
}
