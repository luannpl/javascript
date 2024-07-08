// function soma(numeroUm,numeroDois){
    
//     return Number(numeroUm)+Number(numeroDois);
// }

// function subtracao(numeroUm,numeroDois){
//     return numeroUm-numeroDois;
// }

// function multiplicacao(numeroUm,numeroDois){
//     return numeroUm*numeroDois;
// }
// function divisao(numeroUm,numeroDois){
//     return numeroUm/numeroDois;
// }

// soma(2,5);
// subtracao(2,5);
// multiplicacao(2,5);
// divisao(2,5);





function calcular(){
    let numero1 = document.getElementById("number1").value;
    let numero2 = document.getElementById("number2").value;
    let op = document.getElementById("op").value;
    let resultado = document.getElementById("resultado");

    if(op == "+" || op == "soma"){
        
        return resultado.innerHTML = Number(numero1)+Number(numero2);
    }
    else if(op == "-" || op == "subtração"){
        return resultado.innerHTML = Number(numero1)-Number(numero2);
    }
    else if(op == "*" || op == "multiplicação"){
        return resultado.innerHTML = Number(numero1)*Number(numero2);
    }
    else if(op == "/" || op == "divisão"){
        return resultado.innerHTML = (Number(numero1)/Number(numero2)).toFixed(2);
    }
}



