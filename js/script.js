// const btn_nxt = document.querySelector('.btn-next');
// const btn_prev = document.querySelector('.btn-prev');
// const pokemon = document.querySelector('img');

// btn_nxt.addEventListener("click", function() {
//     // alert("clicou no proximo.")
//     pokemon.src = 'https://projectpokemon.org/home/uploads/monthly_2017_12/47cb64380cd79123087f92f0a6345982b3b78066.gif.63b0ca0946bb3c10566e36dd0d17e3e1.gif';
// });

// btn_prev.addEventListener('click', function(){
//     pokemon.src = 'https://media.tenor.com/74l5y1hUdtwAAAAj/pokemon.gif'
// });

// const nomePokemon = document.querySelector('.pokemon__name');
// const numeroPokemon = document.querySelector(".pokemon__number");
// const imagemPokemon = document.querySelector(".pokemon__image");
// const formulario = document.querySelector("form");
// const input = document.querySelector(".input__search");

// const fetchPokemon = async (pokemon) => {

//     const APIresponde = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

//     const data = await APIresponde.json()

//     return(data);
// };

// const renderPokemon = async (pokemon) => {

//     const data = await fetchPokemon(pokemon);

//     imagemPokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
//     numeroPokemon.innerHTML = data.id;
//     nomePokemon.innerHTML = data.name;

//     console.log(data)
// }

// formulario.addEventListener('submit', (event)=>{
//     event.preventDefault();

//     renderPokemon(input.value.toLowerCase());
//     input.value = ''

// });

// VARIAVEIS GLOBAIS
const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const imagemPokemon = document.querySelector(".pokemon__image");
const form = document.querySelector(".form");
const input = document.querySelector(".input__search");
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searcPokemon = 1;




// CAPTURAR AS INFORMAÇÕES DA POKEAPI
const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    //console.log(APIResponse) demonstrar o dados da api com a função rodando abaixo.

    // condição se digitar algo que nao existe na api
    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    } else {

    }



    //console.log(data);



};

// Renderizar o pokemon

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Carregando...';
    pokemonNumber.innerHTML = ''

    const data = await fetchPokemon(pokemon);

    // condição se tiver algo em data
    if (data) {
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        imagemPokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        input.value = ''; //mudar depois de zerar do addevent
        searcPokemon = data.id; //guardar o id se achar algum pokemon para usar o btn

    } else {

        pokemonName.innerHTML = "Não encontrado :c";
        pokemonNumber.innerHTML = '';
        input.value = ''
        imagemPokemon.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkNfHSl1QDBgMtPSnnGT5IDB5FwNiPVe_Oig&usqp=CAU';
    }


};

//renderPokemon('25') usando a função para ver os pokemons na tela.


//Achar pokemon pelo campo input

form.addEventListener("submit", (event) => {

    event.preventDefault();

    // alert(input.value)
    renderPokemon(input.value.toLowerCase());
    // input.value = ''; fica no renderPokemon
});

// Eventos dos botões prev e next
buttonPrev.addEventListener('click', () => {

    if (searcPokemon > 1) {
        searcPokemon -= 1;
        renderPokemon(searcPokemon);
    }

});

buttonNext.addEventListener('click', () => {
    searcPokemon += 1;
    renderPokemon(searcPokemon);
});



renderPokemon(searcPokemon)