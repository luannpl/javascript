const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"

async function fetchEstados(){
    const response = await fetch(url)
    const data = await response.json()
    return response
}
console.log(fetchEstados())

