function inverterLista(argumento){

    if(Array.isArray(argumento)){
        let arrayInverso = [];
        for(let i = argumento.length-1;i>=0;i--){
            arrayInverso[argumento.length-i-1] = argumento[i];
        };
        return arrayInverso;
    }
    else{
        return "Função aceita apenas array como argumento."
    }
}
