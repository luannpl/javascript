let botao = document.getElementById("botaoClique");
let modal = document.getElementById("modal")
let botaoLimpar = document.getElementById("botao-limpar");
let inputCep = document.getElementById("cep");

botao.addEventListener("click", consultarCep)

async function consultarCep(){
    let cep = Number(document.getElementById('cep').value);
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    let response = await fetch(url);
    let data = await response.json();

    if(data.localidade === undefined && data.uf === undefined){
        modal.innerHTML = "Endereço não encontrado"
    }
    else{

        modal.innerHTML = `
        <ul>
        <li>Rua: ${data.logradouro}</li>
         <li class="item-conteudo">Bairro: ${data.bairro}</li>
         <li class="item-conteudo">Cidade: ${data.localidade}</li>
         <li class="item-conteudo">Estado: ${data.uf}</li>
    
        
        </ul>`
    }  
}

botaoLimpar.addEventListener("click", limpar)
function limpar(){
    inputCep.value = ""
    inputCep.focus();
}