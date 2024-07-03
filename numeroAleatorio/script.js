let pensamento = parseInt(Math.random() *100);
let numero;

// console.log(pensamento)

while(numero!=pensamento){
    numero = prompt("Digite um numero");

    if(numero == pensamento){
        alert("Você acertou");
        break;
    }
    else if(numero<pensamento){
        alert("Número baixo");
    }
    else{
        alert("Número alto");
    }
}