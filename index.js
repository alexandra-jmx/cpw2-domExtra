/*Implemente um código JS que carrega imagens a medida que o usuário realiza a rolagem (scroll) até o final da página. Nesse sentido, siga os seguintes passos:

1 – Implemente um array contento pelo menos 15 endereços de imagens

2 – Crie uma função para escolher randomicamente uma imagem do array. Dica:

https://www.w3schools.com/js/js_random.asp

3 – Quando o usuário entrar na página carregue, por meio do DOM, conjunto de imagens randômicas na página e, quando o usuário realizar o scroll até o final, continue carregando infinitamente. Dica:

if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
// você está no final da página
}*/

//1 - Criando array de imagens
const images = [];

//2
/*W3C Tutorial - Random min and max included
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }*/

//3 
