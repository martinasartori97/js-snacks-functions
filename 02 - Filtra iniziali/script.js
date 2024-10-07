/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filtraperlettera = (nomi, lettera) => {
    return nomi.filter(nome => nome.includes(lettera));
};

const lettera = 'A';

const filteredNames = filtraperlettera(names, lettera);
console.log(filteredNames); // Output: ["Anna", "Adele", "Laura", "Alessandra"]



// Invoca la funzione qui e stampa il risultato in console
result = filtraperlettera (names,"a");
console.log(result);




//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]