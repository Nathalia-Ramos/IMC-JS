'use strict';

function camposValidos(nome, altura, peso) {
    return nome !== "" && altura !== "" && peso !== ""
}
function calcularImc (altura,peso){
    return peso / (altura * peso);
}
function classificarImc(imc){
    
    if (imc < 18.5) {
        texto = " e você está abaixo do peso"
    }else if (imc < 25 ){
        texto = " e  você está com peso ideal"
    }else if (imc < 30 ) {
        texto = " e  você está levemente acima do peso"
    }else if (imc < 35 ) {
        texto = " e  você está com obesidade grau I"
    }else if (imc < 40 ){
        texto = " e  você está com, obesidade grau II"
    }else {
        texto = " e  você está com obesidade grau III"
    }
}
function mostrarResultado() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById ('peso').value;
    const  resultado = document.getElementById('resultado');

   
    if(camposValidos()){
        const imc = calcularImc (altura,peso);
    //esse codigo serve apenas para mostrar se o programa está calculando
    console.log(imc)
    //Estrutura de decisão
    let texto;

  resultado.textContent = nome + "," + " Seu IMC é de " +  imc.toFixed(2) + texto ;
    
    }else {
  resultado.textContent = 'Preencha todos o campos!';

    }
  function limpar (){
    const limpar = document.getElementById('limpar').value;


  }

}
document.getElementById('limpar').addEventListener('click', limpar);
document.getElementById('calcular').addEventListener('click', mostrarResultado);