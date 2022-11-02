let button = document.getElementById("btn");
let image = document.getElementById("img");
let number = document.getElementById("nb");
let namePoke = document.getElementById("name");

const newPokemon = async () => {   
    let rand = Math.ceil(Math.random() * 648) + 1; // on veut ici un rand des id des pokémons de la 5eme génération 

    let requestString = `https://pokeapi.co/api/v2/pokemon/${rand}`; 

    let data = await fetch(requestString) ;
    console.log(data);

    let response = await data.json();
    console.log(response);

    image.src = response.sprites.front_default; //
    number.textContent = `#${response.id}`;     // On fait coorespondre le tout par rapport aux catégories dans l'api
    namePoke.textContent = response.name;       //
}

newPokemon(); //init du 1er pokemon
button.addEventListener("click", newPokemon); 