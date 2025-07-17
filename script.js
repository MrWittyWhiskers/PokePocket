const searchButton = document.getElementById("searchButton");
const turnOffButton = document.getElementById("turnOffButton");
const turnOnButton = document.getElementById("turnOnButton");
const picArea = document.getElementById("picArea");
const nameArea = document.getElementById("nameArea");
let isPoweredOn = false;
let showsPokemon = false;

//100% AI generated
let staticInterval;
let isTurningOn = false;


let idleTwitchInterval;


//100% AI generated
function startFlicker() {
    let isGrey = false;
    staticInterval = setInterval(() => {
        picArea.style.backgroundColor = isGrey ?  "lightgrey" : "grey";
        nameArea.style.backgroundColor = isGrey ?  "lightgrey" : "grey";
        isGrey = !isGrey;
    }, 20);
}


function startIdleState(){
    let isWhite = false;
    idleTwitchInterval = setInterval(() => {
        if(!showsPokemon){
        picArea.style.backgroundColor = isWhite ? "#EEEEEE" : "white";
        nameArea.style.backgroundColor = isWhite ? "#EEEEEE" : "white";
        isWhite = !isWhite;
        }
    }, 1100);
}


//100% AI generated 
function stopFlicker(){
    clearInterval(staticInterval);
}


function stopIdleState(){
    clearInterval(idleTwitchInterval);
}

searchButton.addEventListener("click", () => {
    if(!isPoweredOn) return;
    showsPokemon = true;

    
    //100% AI generated
    stopFlicker();

    stopIdleState();

    picArea.style.backgroundColor = "lightyellow";
    nameArea.style = "background-color: lightgoldenrodyellow";
    randomNumber = Math.floor(Math.random() * 1110);
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then(res => res.json())
    .then(data => {
        picArea.innerHTML= `
        <img src = "${data.sprites.other["official-artwork"].front_default}"></img>
        `;
        nameArea.innerHTML= `
        <p> ${data.name} </p>
        `;
    }); 
});




turnOffButton.addEventListener("click", () => {
    isPoweredOn = false;
    showsPokemon = false;

    //100% AI generated
    isTurningOn = false;
    stopFlicker();

    

    stopIdleState();

    picArea.innerHTML = "";
    nameArea.innerHTML = "";
    picArea.style = "background-color : black";
    nameArea.style = "background-color : black";
});

turnOnButton.addEventListener("click", () => {

    //100% AI generated
    if(!isPoweredOn && !isTurningOn) {
        isTurningOn = true;
        isPoweredOn = true;
        if(showsPokemon) return;

        //100% AI generated
        startFlicker();
        setTimeout(() => {
            if(isPoweredOn){
            stopFlicker();
            if(!showsPokemon){
                picArea.style = "background-color:white";
                nameArea.style = "background-color:white";
                startIdleState();
                }
            }
            isTurningOn = false;
        }, 500);

        

        // picArea.style = "background-color : white";          //do not delete
        // nameArea.style = "background-color : white";         //do not delete
    }
})
