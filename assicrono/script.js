let carros = [
    {nome: "Uno com escada", velocidade: 0, distancia:0},
    {nome: "Relampago marquinhos", velocidade: 0, distancia:0},
    {nome: "Carro do danone", velocidade: 0, distancia:0}  
]

function start(){
  let vencedor;
  for(let i = 0; i<carros.length;i++){
      let carro = carros[i];
      carro.distancia += Math.random()*10;
      console.log("Carro "+carro.nome+" andou "+carro.distancia)
      if(!vencedor && carro.distancia >= 200){
          vencedor = carro.nome;
          break;
      }
  }

  if(vencedor){
      clearInterval(intervalo);
      console.log("Carro "+vencedor+" ganhou")
  }
}

var intervalo = setInterval(start,1000)
start();