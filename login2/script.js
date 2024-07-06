let emails = ["luan@1","luan@2","luan@3","michele1"];
let senhas = ["1", "2", "3", "4"];


for(;;){
let indexEmail;
let emailLogin = prompt("Digite seu email: ");

    for(let i = 0 ; i<emails.length;i++){
        if(emailLogin == emails[i]){
            indexEmail = i;
            // console.log(indexEmail);
            break;
        }
    }
    if(indexEmail == undefined){
        console.log("email nao encontrado");
    } else {
        for(let x = 0; x<senhas.length;x++){
            let senhaLogin = prompt("Digite sua senha: ");
        if(senhas[indexEmail] == senhaLogin){
            alert("Logado com sucesso")
            break;
        }
        else{
            alert("Senha incorreta")
            if(x == 3){
            alert("Tentativas esgotadas")
        }
        }
        }
          
        break;  
    }   
}

