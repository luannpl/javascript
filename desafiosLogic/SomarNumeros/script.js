function somarNumeros(a,b){
    let numeroUm = parseFloat(a);
    let numeroDois = parseFloat(b);

    let soma = numeroUm+numeroDois;
    console.log(soma);
    
    if( a === true && b === false){
        return 1;
    }
    else if(Number.isNaN(numeroUm) || Number.isNaN(numeroDois)){
        return "Função aceita apenas números ou valores que podem ser convertidos em números.";
    }
    else{
        return soma;
    }
}
