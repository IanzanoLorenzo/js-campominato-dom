L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

INIZIO

1 - crea una funzione che generi un div .square
    1.1 - crea un elemento div e assegnalo ad una variabile
    1.2 - aggiungi la classe .square al div appena creato
    1.3 - restituisci la variabie appena creata
2 - crea un evento per inserire 100 div .square all'interno della griglia
    2.1 - inserisci un evento all'interno di tutti i div .square
        2.1.1 - inserisci e rimuovi la classe .active al click del div .square
    2.2 - inserisci il quadrato nella griglia

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

1 - creare un generatore casuale di array con .lenght di 16
2 - creare un confronto tra il numero all'interno dell'array e l'indice dello square appena creato
3 - inserire un eventlistener su quelli che corrispondono e settarli come bombe
4 - inserire un messaggio di vittoria o di sconfitta al termine del gioco

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

1 - quando il numero di punti equivale al numero di celle meno 16 termina il gioco bloccando il click di tutte le celle
2 - quando viene cliccata una bomba termina il gioco bloccando il click di tutte le celle
3 - mostra un messaggio con il risultato del gioco