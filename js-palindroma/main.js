'use strict';
// 1) chiedo all'utente di inserire una parola. 
const parolaUtente = prompt('Inserisci una parola');
console.log(parolaUtente);

// 2) array dove gli elementi sono le lettere della parla inserita. 
const arrayLettere = parolaUtente.split('');
console.log('Array formato lettera per lettera:', arrayLettere);

// 3) array con ordine al contrario. 
const arrayContrario = [];

for (let i = arrayLettere.length - 1; i >= 0; i--) {
    arrayContrario.push(arrayLettere[i]);
}

console.log('Array contrario:', arrayContrario);


// 4) condizione palindroma dove confronto gli array. 
let palindroma = true;

for (let i = 0; i < arrayLettere.length; i++) {
    if (arrayLettere[i] !== arrayContrario[i]) {
        palindroma = false;
        break;
    }
}

if (palindroma) {
    console.log('La parola è palindroma!');
    alert('La parola è palindroma!');
} else {
    console.log('La parola non è palindroma.');
    alert('La parola non è palindroma!');
}