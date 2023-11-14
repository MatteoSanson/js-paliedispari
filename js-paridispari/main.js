'use strict';

// 1) chiedo all'utente tramite prompt di scegliere tra pari e dispari e salvo la sua decisione in una variabile. 
let scelta = prompt('Scegli PARI (digita "p") o DISPARI (digita "d")');

// 2) Inizio ciclo che se non digita p per pari o d per dispari da un messaggio d'errore e di inserire dati validi.
while (!(scelta === 'p' || scelta === 'P' || scelta === 'd' || scelta === 'D')) {
  messaggioErrore();
  scelta = prompt('Scegli PARI (digita "p") o DISPARI (digita "d")');
}

// condizioni per consolelog per chiarezza mia 
if (scelta.toLowerCase() === 'p') {
    console.log("L'utente ha scelto: PARI");
} else if (scelta.toLowerCase() === 'd') {
    console.log("L'utente ha scelto: DISPARI");
}

// 3) Chiedo all'utente di digitare un numero compreso tra 1 e 5 e salvo la sua decisione in una variabile. 
let sceltaNum = +(prompt('Scegli un numero da 1 a 5'));

// 4) Inizio ciclo che se non rispetto le condizioni da un messaggio d'errore e di inserire dati validi. 
while (sceltaNum < 1 || sceltaNum > 5 || isNaN(sceltaNum)){
    messaggioErrore();
    sceltaNum = +(prompt('Scegli un numero da 1 a 5'));
}
console.log("L'utente ha scelto:", sceltaNum);

// 5) Genero un numero random da 1 a 5 che assegno al PC. 
const numRandom = generaNumeroRandom();
console.log('Il numero del pc è', numRandom);

// 6) Aggiungo una variabile il cui valore è dato dalla somma del numero inserito dall'utente e il numero generato dal pc. 
const somma = sceltaNum + numRandom;
console.log ("La somma del tuo numero e del pc è", somma);


const risultato = vincita(somma, scelta);
// 8) Condizione di verità (quando numero pari e utente ha scelto p oppure numero diverso da pari e utente ha scelto d)
if (risultato) {
    console.log('HAI VINTO!');
} else {
    console.log('HAI PERSO!');
}


// FUNZIONI 
// funzione per messaggio d'errore che ripeto due volte 
function messaggioErrore() {
    alert('Non hai inserito un valore corretto');
}

// funzione generatore random richiesta 
function generaNumeroRandom() {
    return Math.floor(Math.random() * 5) + 1;
}
  

function vincita(somma, scelta){
// 7) Aggiungo una varibiale che è vera quando il numero dell'utente + il numero del pc è pari. 
    const sommaPari = somma % 2 === 0;
// 8) Condizione di verità (quando numero pari e utente ha scelto p oppure numero diverso da pari e utente ha scelto d)
    return (sommaPari && scelta.toLowerCase() === 'p') || (!sommaPari && scelta.toLowerCase() === 'd');
}
