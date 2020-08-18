// Create a pokedex. HTML scructure: square with 2 columns.
// On the left column I ll have a pokemon index, showing 20 pokemons per page. Ll have a back and previous button, to go forward/backwards and see all the pokemons. 
// On the right I ll display the picture or information that is selected by the user on the pokemon index
// In order to get the information I need to retrieve the data from the PokeAPI

const $pokemonClicked = document.querySelectorAll('.eachName');


fetch('https://pokeapi.co/api/v2/pokemon').then((response) => { return response.json() }).then(json => {
    console.log(json.results);
    const pokeList = json.results
        .map(json => {
            return `
            <div class="eachName"> 
                <p>Name: ${json.name}</p>
            </div>
            `;
        })
        .join('');
    document.querySelector(".left-col-inner").insertAdjacentHTML("afterbegin", pokeList);

});

$pokemonClicked.forEach(($click) => {
    $click.addEventListener('click', onCardClicked);
});

function onCardClicked(e) {
    const target = e.currentTarget;


};