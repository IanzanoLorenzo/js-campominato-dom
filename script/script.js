"use strict";

//prendo i valori di input e output
const grid = document.getElementById('grid');
const playButton = document.getElementById('play');
const difficolta = document.getElementById("difficolta");

// funzione che crea un quadrato con la classe "square"
function createSquare(){
    const square = document.createElement("div");
    square.classList.add("square");
    return square;
}

//funzione che crea i quadrati in base alla difficoltà scelta
function createSquaresGrid(myGrid,choice){
    for(let i=0; i<choice * choice; i++){
    const square = createSquare();
    
    //evento che aggiunge e toglie la classe "active" dal div "square"
    square.addEventListener('click', function(){
        this.classList.add('active');
        console.log(`Cella cliccata: ${i + 1}`);
    })
    square.innerText = i + 1;
    myGrid.append(square);
}
}

//funzione che imposta le colonne e le righe della griglia
function adaptGrid(myGrid,choice){
    myGrid.style.gridTemplateColumns = `repeat(${choice}, 1fr)`
    myGrid.style.gridTemplateRows = `repeat(${choice}, 1fr)`
}

//funzione che crea una nuova partita
function newGame(myGrid){
    let choice = parseInt(difficolta.value)
    //controllo che venga scelta una difficoltà
    if (isNaN(choice)){
        alert('Scegli una difficoltà');       
    } else{

        //controllo la difficoltà e genero un numero di righe e colonne in base alla difficoltà scelta
        adaptGrid(myGrid,choice)
        createSquaresGrid(myGrid,choice)
    }
}

//evento che crea la griglia al click del bottone
playButton.addEventListener('click', function(){

    grid.innerHTML = '';
    newGame(grid)    
})