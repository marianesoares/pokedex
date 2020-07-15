const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

    const generatePokemonPromises = () => Array(152).fill().map((_, index) => 
        fetch(getPokemonUrl(index + 1)).then(response => response.json()))
    

    const generateHTML = pokemons => {
            
        return pokemons.reduce((accumulator, pokemon) => {
            const types = pokemon.types.map(typeInfo => typeInfo.type.name)

            accumulator += `
            <li class="card  ${types[0]}">
            <img class="card-image" alt="${pokemon.name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" />
                <h2 class="card-title">#${pokemon.id
                    .toString()
                    .padStart(3, '0')}. ${pokemon.name}</h2>
                <p class="card-subtitle">${types.join(' | ')}</p>
            </li>
            `
            return accumulator
        }, '')
    }

    const insertPokemonsIntoPage = pokemons => {

        const ul = document.querySelector('[data-js="pokedex"]')

        ul.innerHTML = pokemons
    }

    const pokemonPromises = generatePokemonPromises()

    
    Promise.all(pokemonPromises)
        .then(generateHTML)
        .then(insertPokemonsIntoPage)



var search_input = document.querySelector("#search_input");

search_input.addEventListener("keyup", function(e){
    var search_item = e.target.value.toLowerCase();
   
    var span_items = document.querySelectorAll(".container ul li");

    span_items.forEach(function(item){
        if (item.textContent.toLowerCase().indexOf(search_item) != -1){
            item.closest("li").style.display = "block";
            console.log(item)
        }else{
            item.closest("li").style.display = "none";
        }
     })
})


