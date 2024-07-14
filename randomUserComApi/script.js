let qtd = prompt("Digite o número de cards: ");
const url = 'https://randomuser.me/api/?results='+qtd;

async function randomuser(){
    const response = await fetch(url);
    const data = await response.json();
    
    const tamanho = await data.results.length;
    console.log(tamanho)
    let card = document.getElementById('lista-usuarios')
    for(let i = 0; i< tamanho; i++){
        card.innerHTML +=
         
        `
        <div class="card">
        <img src="${data.results[i].picture.large}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"><ul class="lista-infos">
          <li class="lista-items">${data.results[i].name.title} ${data.results[i].name.first} ${data.results[i].name.last}</li>
          <li class="lista-items">${data.results[i].location.country}</li>

          </ul>
          </h5>
    
        </div>
      </div>`
    }
    
}
randomuser();