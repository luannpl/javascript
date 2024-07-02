
// let pesoUsado = parseFloat(peso);
// let alturaUsada = parseFloat(altura);


function imc(){
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");
    let imcCalculo = peso/(altura*altura);

    if(imcCalculo<18.5){
        resultado.innerHTML = "Magreza"
    }
    else if(imcCalculo>18.5 && imcCalculo<=24.9){
        resultado.innerHTML = "Normal"
    }
    else if(imcCalculo>24.9 && imcCalculo<=29.9){
        resultado.innerHTML = "Sobrepeso"
    }
    else if(imcCalculo>29.9 && imcCalculo<=34.9){
        resultado.innerHTML = "Obesidade grau I"
    }
    else if(imcCalculo>34.9 && imcCalculo<=39.9){
        resultado.innerHTML = "Obesidade grau II"
    }
    else{
          resultado.innerHTML = "Obesidade grau III"
    }
    console.log(imcCalculo);
}

