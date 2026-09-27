const screen = document.getElementById("software");



let hasPower = false; //to turn the screen on and off]
let canDisplay = false; //to enable and disable the display of pokemon
let canSearch = false; //to enable and disable searching details 

let displayingImage = false;

let randomNumber = 0;
let artwork = null;
let info = ``;

async function fetchRandom(randomNumber){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
    const data = await response.json();
    // const artwork = data.sprites.other['official-artwork'].front_default;

    // return artwork;
    return data;
}

async function turnOn(){
    if(hasPower== false){
        hasPower= true;
        canDisplay = true;
        canSearch = true;
        displayingImage = true;

        randomNumber = Math.floor(Math.random() * 1025) + 1;
        const data = await fetchRandom(randomNumber);//
        artwork = data.sprites.other['official-artwork'].front_default;//
        sprite = data.sprites.front_default;
        info = `
            <p>
                <img id = "sprite" src = "${sprite}"/><br>
                name: ${data.name} <br>
                weight: ${data.weight/10}kg <br>
                element: ${data.types[0].type.name} <br>
                abilities: ${data.abilities[0].ability.name}
            </p>
        `;

        screen.style.backgroundColor = 'lightblue';
        screen.innerHTML = `<img id = "artwork" src = "${artwork}"/>`;//
    }else{
        turnOff();
    }   
}

async function goLeft(){
    if(hasPower == false){
        return;
    }else{
        randomNumber--;
        const data = await fetchRandom(randomNumber);//
        artwork = data.sprites.other['official-artwork'].front_default;//
        sprite = data.sprites.front_default;
        info = `
            <p>
                <img id = "sprite" src = "${sprite}"/><br>
                name: ${data.name} <br>
                weight: ${data.weight/10}kg <br>
                element: ${data.types[0].type.name} <br>
                abilities: ${data.abilities[0].ability.name}
            </p>
        `;
        if(canDisplay == false){
            return;
        }else{
            if(displayingImage == false){
                screen.innerHTML = `${info}`;
            }else{
                screen.innerHTML = `<img src = "${artwork}"/>`;//
            }
        }
    }
}

async function goRight(){
    if(hasPower == false){
        return;
    }else{
        randomNumber++;
        const data = await fetchRandom(randomNumber);//
        artwork = data.sprites.other['official-artwork'].front_default;//
        sprite = data.sprites.front_default;
        info = `
            <p>
                <img id = "sprite" src = "${sprite}"/><br>
                name: ${data.name} <br>
                weight: ${data.weight/10}kg <br>
                element: ${data.types[0].type.name} <br>
                abilities: ${data.abilities[0].ability.name}
            </p>
        `;
        if(canDisplay == false){
            return;
        }else{
            if(displayingImage == false){
                screen.innerHTML = `${info}`;
            }else{
                screen.innerHTML = `<img src = "${artwork}"/>`;//
            }
        }
    }
}


async function searchInfo(){
    if(canDisplay == false){
        return;
    }else{
        if(canSearch == false){
            return;
        }else{
            if(displayingImage == false){
                displayingImage = true;
                screen.innerHTML = `<img src = "${artwork}"/>`;//
            }else{
                displayingImage = false;
                screen.innerHTML = `${info}`;
            }
        }
    }
}


function turnOff(){
    hasPower= false;
    canDisplay = false;
    canSearch = false;
    screen.style.backgroundColor = 'black';
        screen.innerHTML = ``;
}   