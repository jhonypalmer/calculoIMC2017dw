/*jslint devel: true */
/*global altura,peso,sexo,masculino,feminino*/
//alert("Carregando script num arquivo externo.");

function calcular() {
    "use strict";
    var altura, peso, sexo, imc;
    altura = document.formulario.altura.value;
    peso = document.formulario.peso.value;
    sexo = document.formulario.sexo.value;
    imc = peso / (altura * altura);
    if (altura <= 0) {
        alert("Altura não pode ser menor que 0.");
    } else if (peso <= 0) {
        alert("Peso não pode ser menor que 0.");
    } else if (sexo === "masculino") {
        if (imc <= 20.7) {
            alert("Abaixo do Peso!");
        } else if (imc < 26.4) {
            alert("Peso Normal!");
        } else if (imc < 27.8) {
            alert("Acima do Peso!");
        } else if (imc < 31.1) {
            alert("Acima do Peso Ideal!");
        } else {
            alert("Obesidade!!!!");
        }
    } else if (sexo === "feminino") {
        if (imc <= 19.1) {
            alert("Abaixo do Peso!");
        } else if (imc < 25.8) {
            alert("Peso Normal!");
        } else if (imc < 27.3) {
            alert("Acima do Peso!");
        } else if (imc < 32.3) {
            alert("Acima do Peso Ideal!");
        } else {
            alert("Obesidade!!!!");
        }
    }
}