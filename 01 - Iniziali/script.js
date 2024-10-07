/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function  elenconomi (nomi){
    return nomi.map(nome => nome [0]);
}

const estraiIniziali = elenconomi(names);
console.log(estraiIniziali);



// Invoca la funzione qui e stampa il risultato in console




//Risultato atteso: ["A", "L", "M", "A", "G", "A"]