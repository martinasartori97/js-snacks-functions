/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const lettera ="A";

// Dichiara la funzione qui.
function filtraperletteraA  (names, lettera){
    return names.filter(nome => nome.startsWith(lettera))
};







// Invoca la funzione qui e stampa il risultato in console
const filtraperlettera = filtraperletteraA(names, lettera);
console.log(filtraperlettera);




//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]