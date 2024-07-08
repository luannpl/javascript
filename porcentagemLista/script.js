
function maiorQ100(){
    let lista = [50,25,120,200,40,80,350,550,20,110];
    let total = lista.length;
    let numerosMaiorQ100 = 0
    for(let i = 0; i<lista.length;i++){
        if(lista[i] >100){
            numerosMaiorQ100++    
        }
    }
    let resposta = (numerosMaiorQ100/total) *100+"%";
    console.log(resposta)
}
maiorQ100()