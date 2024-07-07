let emails = ["luan@1","luan@2","luan@3","michele1"];
let senhas = ["1", "2", "3", "4"];

function teste(){


for(;;){
let indexEmail;
let emailLogin = document.getElementById("email").value;

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
            let senhaLogin = document.getElementById("senha").value;
        if(senhas[indexEmail] == senhaLogin){
            alert("Logado com sucesso")
            break;
        }
        else{
            alert("Senha incorreta")
            break;
        }
        }
          
        break;  
    }   
}

}



























































































// let emailCadastrado = "luan@123";
// let senhaCadastrada = 12345;
// let emailLogin;

// function email() {
//   for (var x = 0; x < 4; x++) {
//      emailLogin = prompt("Digite seu email:");
//     if (emailLogin != emailCadastrado) {
//       emailLogin = undefined
//       alert("Email não encontrado");
//       if (x == 3) {
//         alert("Tentativas esgotadas");
//         break;
//       }
//     } else {
//       break;
//     }
//   }
// }

// function senha() {
//   for (var y = 0; y < 3; y++) {
//     var senhaLogin = prompt("Digite sua senha:");
//     if (senhaLogin == senhaCadastrada) {
//       break;
//     }
//     if (y == 2) {
//       alert("Tentativas esgotadas");
//       break;
//     }
//   }

//   if (emailCadastrado == emailLogin && senhaCadastrada == senhaLogin) {
//     console.log("Usuário logado!!");
//     alert("Logado com sucesso!");
//   } else {
//     console.log("Usuário não logado!");
//   }

//   if (x == 3) {
//     alert("Tentativas esgotadas");
//   }
// }

// function logar() {
//   email();
//   console.log(emailLogin)
//   if (emailLogin != undefined) {
//     senha();
//   }
// }

// // for (var x = 0; x < 4; x++) {
// //   let emailLogin = prompt("Digite seu email:");
// //   if(emailLogin != emailCadastrado){
// //     alert("Email não encontrado");
// //     continue
// //   }
// //    for(var y = 0; y<3;y++){
// //       var senhaLogin = prompt("Digite sua senha:");
// //     if(senhaLogin == senhaCadastrada){
// //         break;
// //     }
// //     if(y==2){
// //     alert("Tentativas esgotadas");
// //     }
// //   }
// //   if (emailCadastrado == emailLogin && senhaCadastrada == senhaLogin) {
// //     console.log("Usuário logado!!");
// //     alert("Logado com sucesso!");
// //     break;
// //   } else {
// //     console.log("Usuário não logado!");
// //   }

// //   if (x == 3) {
// //     alert("Tentativas esgotadas");
// //   }
// // }
