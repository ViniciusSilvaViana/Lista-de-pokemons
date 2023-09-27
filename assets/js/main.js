const pokemonsList = document.getElementById('pokemonsList')
//add mais um item a pokemonsList pelo js, com innerHTML
//pokemonsList.innerHTML += `<li>Teste</li>`
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 10 
;
let offset = 0; 
const maxRecord = 150;




function loadPokemonItens(offset, limit) {
    pokeapi.getPokemons(offset, limit).then((pokemons = []) => {
        const newlist = pokemons.map((pokemon) =>
        `<li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                    
                        <div class="detail">
                            <ol class="types">
                                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                            </ol>
        
                            <img src="${pokemon.photo}"  
                                alt="${pokemon.name}">
        
                        </div>
                </li>`
                
        ).join('')
        pokemonsList.innerHTML += newlist
    })
}


loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click',() =>{
    offset += limit
    const qtRecordnextPage = offset + limit

    if (qtRecordnextPage >= maxRecord) {
        const newLimit = maxRecord - offset
        loadPokemonItens(offset, limit)
    
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else{
        loadPokemonItens(offset, limit)
    }
    
})



    

 // const listItens = []

    //     for (let i = 0; i < pokemonsl.length; i++) {
    //         const pokemon = pokemonsl[i];
    //         listItens.push(convertPokemonToHtml(pokemon))
    //     }  
    //     console.log(listItens)

/* 
fetch(url)
    .then((Response) => Response.json())
    .then((jsonBody) => console.log(jsonBody))
    .catch((error) => console.error(error))
*?

/*
fetch(url)
    .then(function (response){
        return response.json()
    })
    .then(function(jsonBody){
        console.log(jsonBody)
    })
    .catch(function (error) {
        console.error(error)
    })
    .finally(function () {
        console.log('Requisição concluída!')
    })
*/

/*
fetch(url)
    .then(function(response){
        console.log(reponse)
    })
    .catch(function (error) {
        console.error(error)
    })
    .finally(function () {
        console.log('Requisição concluída!')
    })
*/

/* outro jeito de se usar   
try {

} catch (error) {

} finally{

}

*/
