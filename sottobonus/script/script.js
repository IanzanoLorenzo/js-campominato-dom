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

function generateRandomNum(min, max){
    return Math.floor(Math.random() * (max - min +1) +min)
}

function generateRandomArray(anArray,max){
    while (anArray.length < 16){
        let newNumb = generateRandomNum(1, max)
        if(!anArray.includes(newNumb)){
            anArray.push(newNumb)
        }
    }
}

//funzione che crea i quadrati in base alla difficoltà scelta
function createSquaresGrid(myGrid, squareNum, anArray, counter){
    for(let i=0; i<squareNum; i++){
        const square = createSquare();
        generateRandomArray(anArray, squareNum);
        //evento che aggiunge e toglie la classe "active" dal div "square"
        if(!anArray.includes(i + 1)){
            square.addEventListener('click', function(){
                this.classList.add('active')
                counter += 1
                if(counter === squareNum - anArray.length){
                    alert(`Hai completato il gioco`)
                    squaresDisable(anArray)
                }
                this.style.pointerEvents = 'none'
            })
        } else{
            square.addEventListener('click', function(){
                this.classList.add('bomb');
                alert(`Game Over, Hai fatto: ${counter} punti`)
                squaresDisable(anArray)
            })
        }
        
        square.innerText = i + 1;
        myGrid.append(square);
}
}

function squaresDisable(anArray){
    let squareClass = document.getElementsByClassName('square');
    for(let i = 0; i < squareClass.length; i++){
        if(anArray.includes(i + 1)){
            squareClass[i].classList.add('bomb');
        }
        squareClass[i].style.pointerEvents = 'none';
    }
}

//funzione che imposta le colonne e le righe della griglia
function adaptGrid(myGrid,choice){
    myGrid.style.gridTemplateColumns = `repeat(${choice}, 1fr)`;
    myGrid.style.gridTemplateRows = `repeat(${choice}, 1fr)`;
}

//funzione che crea una nuova partita
function newGame(myGrid, selected){
    let pointCounter = 0;
    let choice = parseInt(selected.value);
    let squareNum = choice * choice;
    let bombsArray = [];
    //controllo che venga scelta una difficoltà
    if (isNaN(choice)){
        alert('Scegli una difficoltà');       
    } else{

        //controllo la difficoltà e genero un numero di righe e colonne in base alla difficoltà scelta
        adaptGrid(myGrid,choice);
        createSquaresGrid(myGrid, squareNum, bombsArray, pointCounter);
    }
    console.log(bombsArray);
}

//evento che crea la griglia al click del bottone
playButton.addEventListener('click', function(){

    grid.innerHTML = '';
    newGame(grid, difficolta)    
})