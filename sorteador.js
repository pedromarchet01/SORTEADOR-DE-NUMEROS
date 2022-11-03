let radio = document.getElementsByName('radio');
let saida = document.getElementById('saida');

function clicou () {

  let randomNumber = '';

if(radio[0].checked == false && radio[1].checked == false && radio[2].checked == false && radio[3].checked == false && radio[4].checked == false){
  alert('ESCOLHA UMA OPÇÃO!')
}
  
if(radio[0].checked == true){

  let randomNumber = Math.floor(Math.random() * 10);
  saida.innerHTML = `<p> O número sorteado foi <mark >${randomNumber}</mark></p>`;

}

if(radio[1].checked == true){

  let randomNumber = Math.floor(Math.random() * 25);
  saida.innerHTML = `<p> O número sorteado foi <mark >${randomNumber}</mark></p>`;

}

if(radio[2].checked == true){

  let randomNumber = Math.floor(Math.random() * 50);
  saida.innerHTML = `<p> O número sorteado foi <mark >${randomNumber}</mark></p>`;

}

if(radio[3].checked == true){

  let randomNumber = Math.floor(Math.random() * 100);
  saida.innerHTML = `<p> O número sorteado foi <mark >${randomNumber}</mark></p>`;

}

if(radio[4].checked == true){

  let randomNumber = Math.floor(Math.random() * 1000);
  saida.innerHTML = `<p> O número sorteado foi <mark >${randomNumber}</mark></p>`;

}

}

function limpou () {
  
  document.location.reload();
}