let emailCadastrado = "luan@123";
let senhaCadastrada = 12345;

for (var x = 0; x < 4; x++) {
  let emailLogin = prompt("Digite seu email:");
  if(emailLogin != emailCadastrado){
    alert("Email não encontrado");
    continue
  }
   for(var y = 0; y<3;y++){
      var senhaLogin = prompt("Digite sua senha:");
    if(senhaLogin == senhaCadastrada){
        break;
    }
    if(y==2){
    alert("Tentativas esgotadas");
    }
  }
  if (emailCadastrado == emailLogin && senhaCadastrada == senhaLogin) {
    console.log("Usuário logado!!");
    alert("Logado com sucesso!");
    break;
  } else {
    console.log("Usuário não logado!");
  }

  if (x == 3) {
    alert("Tentativas esgotadas");
  }
}
