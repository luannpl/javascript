// const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"

// async function fetchEstados(){
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data)
//     console.log(data[0].regiao.nome)
// }
// fetchEstados()



const url = 'https://randomuser.me/api/?results=10';

async function randomuser(){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
}

randomuser();