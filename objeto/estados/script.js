import ufs from "./estados.js";

let tagUl = document.getElementById("lista-estados");

tagUl.addEventListener("dblclick", function () {
  alert("Clicou");
});

for (let i = 0; i < ufs.length; i++) {
  tagUl.innerHTML += `<li id="lis${i}">Estado: ${ufs[i].nome},<br> Região: ${ufs[i].regiao.nome}</li><br>`;
}

for (let i = 0; i < ufs.length; i++) {
  let tagLi = document.getElementById(`lis${i}`);
  tagLi.addEventListener("click", function () {
    alert(`Estado: ${ufs[i].nome}, Região: ${ufs[i].regiao.nome}`);
  });
}

// let chave =0;
// let interval = setInterval(function(){
//     tagUl.innerHTML += `<li>Estado: ${ufs[chave].nome} <br> Região: ${ufs[chave].regiao.nome}</li><br>`
//     chave++;
//     console.log(chave)
// },200)

// let stop = ufs.length;
// setTimeout(function(){
//         clearInterval(interval)
// },stop*200)

// let interval = setInterval(function(){
//     tagUl.innerHTML += "<li>Conteúdo de texto</li>"
// },2000);

// setTimeout(function(){
//     clearInterval(interval);
// },10000)

// console.log(tagUl)
