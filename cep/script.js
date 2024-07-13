let cep = prompt("Digite o cep: ")
const url = `https://viacep.com.br/ws/${cep}/json/`;

async function consultarCep(){
    const response = await fetch(url);
    const data = await response.json();
    
    let carde = document.getElementById("card")   
     console.log(data)
    carde.innerHTML += 
    `<div class="conteudo"> <ul class="lista-conteudo">
    <li class="item-conteudo">Rua: ${data.logradouro}</li>
    <li class="item-conteudo">Bairro: ${data.bairro}</li>
    <li class="item-conteudo">Cidade: ${data.localidade}</li>
    <li class="item-conteudo">Estado: ${data.uf}</li>
    </ul>`
};
consultarCep();