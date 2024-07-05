let emails = ["luan@1","luan@2","luan@3","michele1"];
let senhas = ["1", "2", "3", "4"];


for(;;){
let indexEmail;
let emailLogin = prompt("Digite seu email: ");

    for(let i = 0 ; i<emails.length;i++){
        if(emailLogin == emails[i]){
            indexEmail = i;
            console.log(indexEmail);
            break
        }
    }
    if(indexEmail == undefined){
        console.log("email nao encontrado")
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




// let emailLogin;

// function email(){
//      emailLogin = prompt("Digite seu email: ");
//     for(let i = 0; i<emails.length;i++){
//         if(emailLogin == emails[i]){
//             alert("Email correto")
//             break;
//         }
//         else{
//             continue
    
//     }}
// }

// function senha(){
//     let senhaLogin = prompt("Digite sua senha: ");
//     for(let i = 0; i<senhas.length;i++){
//         if(senhaLogin == senhas[i]){
//             alert("Senha correta")
//             break;
//         }
//         else{
//             continue
    
//     }}
// }



// email();
// senha();


// function senha(){
//     for(let i = 0; i<senhas.length; i++){
//         if(senhaLogin == senhas[i]){
//             console.log("Senha encontrada")
//         }
//     }
// }
// let emailLogin = prompt("Digite seu email: ");
// let senhaLogin = prompt("Digite sua senha: ");



// while()
// for(let i = 0;i<emails.length; i++){
//     while(emailLogin != emails[i] && senhaLogin != senhas[i]){
//         emailLogin = prompt("Digite seu email: "); 
//         senhaLogin = prompt("Digite sua senha: ");
//     }

// }