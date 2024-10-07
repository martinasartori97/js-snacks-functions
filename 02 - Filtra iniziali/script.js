/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const lettera ="a";

// Dichiara la funzione qui.
function filtraperletteraA  (nomi, lettera){
    return nomi.filter(nome => nome.startsWith(lettera))
};

console.log(filtraperletteraA);





// Invoca la funzione qui e stampa il risultato in console
const filtraperlettera = filtraParoleInizianoCon(nomi, lettera);
console.log(filtraperlettera);




//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]