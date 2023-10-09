// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

let km = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
console.log(km)

let età = parseInt(prompt('Quanti anni hai?'));
console.log(età)

let prezzo = (0.21 * km)
console.log(prezzo)

if (isNaN(età) | isNaN(km)){
    window.location.reload();
}
if (età < 18) {
    prezzo = (prezzo - (prezzo* 0.20));
    // prezzo.toPrecision(4);
    console.log('prezzo €', prezzo);
} else if (età > 65){
    prezzo = (prezzo - (prezzo* 0.40));
    // prezzo.toPrecision(4);
    console.log('prezzo €', prezzo);
}
